class Router {
    constructor() {
      this.stack = [];
    }
  
    get(path, middleware) {
        this.register(path, 'get', middleware)
    }

    post(path, middleware) {
        this.register(path, 'post', middleware)
    }

    register(path, method, middleware) {
        const route = {path, method, middleware}
        this.stack.push(route)
    }

    routes() {
        let stack = this.stack

        return async function (ctx, next) {
            
            let route
            for (let i = 0; i < stack.length; i++) {
                let {method, path, middleware} = stack[i]
                if (path === ctx.url && method === ctx.method) {
                    route = middleware
                    break
                }
            }

            if (typeof route === 'function') {
                route(ctx, next)
                return
            }
            await next()
        }
    }
  }
  module.exports = Router;