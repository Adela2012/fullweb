const Koa = require('koa')
// const Koa = require('./IKoa')

const app = new Koa()


app.use(async (ctx, next) => {
    console.log('f1')
    ctx.body = 'f1 ..'
    // await next()

    // console.log('f1 end')
})

// app.use(require('koa-static')(__dirname + '/'))

// app.use(async (ctx, next) => {
//     console.log('f2')
//     ctx.body += 'f2 ..'
//     await next()
//     console.log('f2 end')


// })

const router = require('koa-router')() 
router.get('/string', async (ctx, next) => {

    ctx.body = 'koa2 string'
}) 
router.get('/json', async (ctx, next) => {

    ctx.body = {

        title: 'koa2 json'

    }
}) 
app.use(router.routes())

// app.use(async (ctx, next) => {
//     console.log('f3 end')
//     ctx.body += 'hello ..'
// })

app.listen(3000, () => {
    console.log('listen 3000')
})