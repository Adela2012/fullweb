




const Koa = require('koa')
const session = require('koa-session')
const app = new Koa()

app.keys = ['some secret']

const SESS_CONFIG = {
    key: 'wtf sid',
    signed: true
}

app.use(session(SESS_CONFIG, app))


app.use(ctx => {
    if (ctx.path === '/favicon.icon') return
    let n = ctx.session.count || 0

    ctx.session.count = ++n
    ctx.body = `number ${n} test request`
})

app.listen(3000)