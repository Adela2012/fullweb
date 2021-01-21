const http = require('http')
const context = require('./context')
const response = require('./response')
const request = require('./request')
class IKoa {
    constructor() {
        this.middlewares = []
    }
    use(fn) {
        this.middlewares.push(fn)
    }
    compose(middlewares) {
        return (ctx) => {
            return dispatch(0)

            function dispatch(i) {
                let fn = middlewares[i]
                if (!fn) return Promise.resolve()
                else return Promise.resolve(fn(ctx, () => dispatch(i+1)))
            } 
        }
    }
    composeReduce(middlewares) {
        // if (middlewares.length == 1) return (ctx, next) => middlewares[0](ctx, Promise.resolve)
        return middlewares.reduce((all, fn) => (ctx, next) => all(ctx, () => fn(ctx, next)))
    }
    createContext(req, res) {
        const ctx =  Object.create(context)
        ctx.request =  Object.create(request)
        ctx.response =  Object.create(response)

        ctx.req = ctx.request.req = req
        ctx.res = ctx.response.res = res
        
        return ctx
    }
    listen(...arg) {
        const server = http.createServer(async (req, res) => {
            let fn = this.compose(this.middlewares)
            let context = this.createContext(req, res)
            await fn(context)
            res.end(context.body)
        })

        server.listen(...arg)
    }
}

module.exports = IKoa