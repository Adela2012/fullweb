import * as glob from 'glob'

import * as Koa from 'koa'

import * as KoaRouter from 'koa-router'



type HTTPMethod = 'get' | 'post'| 'delete' | 'put' | 'patch'

type LoadOptions = {
    extname?: string;
}

type RouteOptions = {
    prefix?: string;
    middlewares?: Array<Koa.middlewares>;
}


const router = new KoaRouter()

const createMethod = router => (method: HTTPMethod) => (path: string, options?: RouteOptions) => {
    return (target, property) => {
        process.nextTick(() => {
            const middlewares = []
    
            if (target.middlewares) {
                middlewares.push(...target.middlewares)
            }
    
            if (options.middlewares) {
                middlewares.push(...options.middlewares)
            }
            middlewares.push(target[property])
            const url = options && options.prefix ? options.prefix + path : path
            router[method](url, ...middlewares)
        })
    }
}

const method = createMethod(router)

export const get = method('get')
export const post = method('post')
export const del = method('delete')
export const put = method('put')

export const middlewares = function (middlewares: Koa.Middleware[]) {
    return function(target) {
        target.prototype.middlewares = middlewares;
    }
}

export const load = (folder: string, options: LoadOptions = {}): KoaRouter => {
    console.log(folder)
    const extname  = options.extname || '.{js,ts}';
    glob
        .sync(require('path')).join(folder, `./**/*${extname}`)
        .forEach(item => require(item));
    return router;
}
