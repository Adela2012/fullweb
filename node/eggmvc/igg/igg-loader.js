const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

function load(dir, cb) {
    const url = path.resolve(__dirname, dir)

    const files = fs.readdirSync(url)

    files.forEach(filename => {
        filename = filename.replace('.js', '')
        const file = require(url + '/' + filename)
        cb(filename, file)
    })
}

function initRouter(app) {
    const router = new Router()

    load('routes', (filename, routes) => {
        // index前缀处理
        const prefix = filename === 'index' ? '' : `/${filename}`

        // 路由类型判断
        routes = typeof routes === 'function' ? routes(app) : routes

        // 遍历添加路由
        Object.keys(routes).forEach(key => {
            const [method, path] = key.split(' ')
            console.log(`正在映射地址 ${method.toLocaleUpperCase()} ${prefix}${path}`)
            // 注册
            // router[method](prefix + path, routes[key])
            router[method](prefix + path, async ctx => {
                app.ctx = ctx
                await routes[key](app)
            })
        })
    })
    return router
}

function initController(app) {
    const controllers = {}
    // 读取目录
    load('controller', (filename, controller) => {
        controllers[filename] = controller(app)
    })
    return controllers
}

function initService() {
    const services = {}
    load('service', (filename, service) => {
        services[filename] = service
    })
    return services
}

const Sequelize = require('sequelize')
function loadConfig(app) {
    load('config', (filename, conf) => {
        if (conf.db) {
            app.$db = new Sequelize(conf.db)

            // 加载模型
            app.$model = {}
            load('model', (filename, { schema, options }) => {
                app.$model[filename] = app.$db.define(filename, schema, options)
            })
            app.$db.sync()
        }

        if (conf.middleware) {
            conf.middleware.forEach(mid => {
                const midPath = path.resolve(__dirname, 'middleware', mid)
                app.$app.use(require(midPath))
            })
        }
    })
}

const schedule = require('node-schedule')
function initSchedule() {
    load('schedule', (filename, scheduleConfig) => {
        schedule.scheduleJob(scheduleConfig.interval, scheduleConfig.handler)
    })
}

module.exports = { initRouter, initController, initService, loadConfig, initSchedule }
