import * as Koa from 'koa'
import {get, post} from '../utils/route-decors'

const users = [
    {
        name: 'tom'
    }
]


// class level 
@middlewares([
    async function guard(ctx, next) {
        if (ctx.header.token) {
            await next()
        } else {
            throw 'please login first'
        }
    }
])
export default class User {
    @get("/users")
    public list (ctx) {
        ctx.body = {
            ok: 1,
            data: users
        }
    }

    @post("/users", {
        middlewares: [
            async (ctx, next) => {
                // valid
                // user requrie
                const name = ctx.request.body.name
                if (!name) {
                    throw 'input user'
                }
                next()
            }
        ]
    })
    public add (ctx) {
        users.push(ctx.request.body)
        ctx.body = {ok: 1}
    }
}