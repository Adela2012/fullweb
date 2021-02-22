const Koa = require('koa')
const router = require('koa-router')()
const session = require('koa-session')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')

const app = new Koa()

app.use(cors({ credentials: true }))

app.keys = ['some secret']

app.use(static(__dirname + '/'))

app.use(bodyParser())
app.use(session(app))

app.use((ctx, next) => {
    if (ctx.url.indexOf('login') > -1) {
        next()
    } else {
        console.log('session', ctx.session.userinfo)
        if (!ctx.session.userinfo) {
            ctx.body = {
                messsge: 'login failed'
            }
        } else {
            next()
        }
    }
})

router.post('/users/login', async ctx => {
    const {
        body
    } = ctx.request
    console.log('body',body)

    ctx.session.userinfo = body.username

    ctx.body = {
        message: 'login success'
    }

})

router.post('/users/logout', async ctx => {

    delete ctx.session.userinfo

    ctx.body = {
        message: 'logout success'
    }

})

router.get('/users/getUser', async ctx => {
    ctx.body = {
        message: 'get userinfo success',
        userinfo: ctx.session.userinfo
    }
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)