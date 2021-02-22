
const router = require('koa-router')()

const jwt = require("jsonwebtoken") 
const jwtAuth = require("koa-jwt")

const secret = "it's a secret"

const bodyParser = require('koa-bodyparser') 
const static = require('koa-static')
const Koa = require('koa')
const app = new Koa()

app.keys = ['some secret']

app.use(static(__dirname + '/'))

app.use(bodyParser())

router.post('/users/login-token', async ctx => {
    const {body} = ctx.request

    const userinfo = body.username
    ctx.body = {
        message: 'success login',
        user: userinfo,
        token: jwt.sign({
            data: userinfo,
            exp: Math.floor(Date.now() / 1000) + 60 * 60
        }, secret)
    }
})

router.get(
    '/users/getUser-token',
    jwtAuth({
        secret
    }),
    async ctx => {
        console.log(ctx.state.user)

        ctx.body = {
            messge: 'get data success',
            userinfo: ctx.state.user.data
        }
    }
)

app.use(router.routes())
app.use(router.allowedMethods());
app.listen(3000)