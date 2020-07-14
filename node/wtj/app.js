




const Koa = require('koa')
const session = require('koa-session')



const redisStore = require('koa-redis')
const redis = require('redis')
const redisClient = redis.createClient(6379, 'localhost')

const wrapper = require('co-redis')
const client = wrapper(redisClient)


const app = new Koa()

app.keys = ['some secret']

const SESS_CONFIG = {
    key: 'wtf sid',
    signed: true,
    store: redisStore({ client })
}

app.use(session(SESS_CONFIG, app))

app.use(async (ctx, next) => {
    const keys = await client.keys('*')
    keys.forEach(async key => {
        console.log(await client.get(key))
    })
    await next()
})

app.use(ctx => {
    if (ctx.path === '/favicon.icon') return
    let n = ctx.session.count || 0

    ctx.session.count = ++n
    ctx.body = `number ${n} test request`
})

app.listen(3000)