import * as Koa from 'koa'
import * as bodify from 'koa-body'

import * as serve from 'koa-static'
import * as timing from 'koa-xtime'

import {load} from './utils/route-decors'

import {resolve} from 'path'


const app = new Koa()

app.use(timing())
app.use(serve(`${__dirname}/public`))

app.use(bodify({
    multipart: true,
    // parse delete request body
    strict: false
}))

// app.use((ctx: Koa.Context) => {
//     ctx.body = 'hello'
// })

const router = load(resolve(__dirname, './routes'))

app.use(router.routes())

app.listen(3000, ()=> {
    console.log('serving...')
})