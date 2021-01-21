// 集中式管理状态
// 可预测发生变化

let Vue

class Store {
    constructor(options) {
        this.$options = options

        this._mutations = options.mutations
        this._actions = options.actions

        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)

        const computed = {}
        this.getters = {}
        Object.keys(options.getters).forEach(key => {
            Object.defineProperty(this.getters, key, {
                get() {
                    // computed
                    return options.getters[key](options.state)
                }
            })
        })

        this._vm = new Vue({
            data: {
                $$state: options.state
            },
            computed,
        })
    }


    get state() {
        return this._vm._data.$$state 
    }

    commit(type, payload) {
        const entry = this._mutations[type]
        if (!entry) console.error('unknown mutation type')
        entry(this.state, payload)
    }

    dispatch(type, payload) {
        const entry = this._actions[type]
        if (!entry) console.error('unknown action type')
        entry(this, payload)
    }


}

function install (_Vue) {
    Vue = _Vue

    Vue.mixin({
        beforeCreate() {
            if (this.$options.store){
                Vue.prototype.$store = this.$options.store
            }
        },
    })
}

export default {Store, install}