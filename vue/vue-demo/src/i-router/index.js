let Vue

class VueRouter {
    constructor(options) {
        this.$options = options
        console.log(this.$options)

        let currentPath = window.location.hash.slice(1) || '/'

        Vue.util.defineReactive(this, 'current', currentPath)
        console.log(this.current)

        window.addEventListener('hashchange', this.onHashChange.bind(this))
    }

    onHashChange() {
        console.log(55, window.location.hash);
        this.current = window.location.hash.slice(1) || '/'
    }
}

VueRouter.install = function (_Vue) {
    Vue = _Vue
    // 挂载$router属性。
    // 全局混入，延迟到router创建完毕并附加到选项上再执行
    Vue.mixin({
        beforeCreate() {
            console.log(222, this.$options)
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
            }
        },
    })

    Vue.component('router-link', {
        props: {
            to: {
                type: String,
                required: true
            }
        },
        render(h) {
            console.log('router-link', this.$slots, this.to);
            return h('a', {
                attrs: {
                    href: `#${this.to}`
                }
            }, this.$slots.default)
        }
    })
    
    Vue.component('router-view', {
        render(h) {
            console.log(888,  this.$router)
            let component  = null
            let route = this.$router.$options.routes.find(i => i.path == this.$router.current)
            if (route) component = route.component
            return h(component)
        }
    })
}




export default VueRouter