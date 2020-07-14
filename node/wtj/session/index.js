const static = require('koa-static')
const Koa = require('koa')

const app = new Koa()
app.keys = ['some secret']

app.use(static(__dirname + '/'))

app.use(bodyParser())
app.use(session(app))

app.use((ctx, next) => {
    if (ctx.url.indexOf('login') > -1) {
        next()
    } else {
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

    ctx.session.userinfo = body.username

    ctx.body = {
        message: 'login success'
    }

})

router.post('/users/logout', async ctx => {
    const {
        body
    } = ctx.request

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

app.listen(3000)