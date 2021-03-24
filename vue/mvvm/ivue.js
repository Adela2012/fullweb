

function defineReactive(obj, key, val) {
    observe(val)
    let dep = new Dep()
    Object.defineProperty(obj, key, {
        get() {
            console.log('get ', key)
            Dep.target && dep.addDep(Dep.target)
            return val
        },
        set(newVal) {
            if (val !== newVal) {
                console.log('set ', key, newVal)
                observe(newVal)
                dep.notify()
                val = newVal
            }
        }
    })
}

function observe(obj) {
    if(typeof obj !== 'object' || obj == null) {
        return
    }

    new Observer(obj)
}

class Observer {
    constructor(obj){
        if(Array.isArray(obj)) {

        } else {
            this.walk(obj)
        }
    }

    walk(obj) {
        Object.keys(obj).forEach(key => {
            defineReactive(obj, key, obj[key])
        })
    }
}

// let obj = {foo: 1, boo: {a: 1}}
// observe(obj)
// // obj.boo 
// obj.boo = {b: 3}
// obj.boo.b

function proxy(vm) {
    Object.keys(vm.$data).forEach(key => {
        Object.defineProperty(vm, key, {
            get() {
                return vm.$data[key]
            },
            set(newVal) {
                console.log(23455, newVal)
                vm.$data[key] = newVal
            }
        }) 

    })
}


class IVue {
    constructor(options){
        this.$data = options.data
        this.$el = options.el
        observe(this.$data)
        proxy(this)

        new Compile(options.el, this)
    }
}

class Compile {
    constructor(el, vm) {
        this.$el = document.querySelector(el)
        this.$vm = vm
        if (this.$el) {
            this.compile(this.$el)
        }
    }

    compile(el) {
        let childNodes = el.childNodes
        childNodes.forEach(node => {
            if (this.isElement(node)) {
                let attrs = node.attributes
                Array.from(attrs).forEach(attr => {
                    let attrName = attr.name
                    let attrValue = attr.value
                    if(attrName.indexOf('v-') == 0) {
                        let dir = attrName.substr(2)
                    this.update(dir, attrValue, node)
                }
                })
            } else if (this.isInner(node)) {
                this.update('text', RegExp.$1, node)
            }
            if(node.childNodes){
                this.compile(node)
            }
        })
    }

    isElement(node) {
        return node.nodeType === 1
    }
    isInner(node) {
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }
    update(dir, exp, node) {
        const fn = this[dir+'Updater']
        fn && fn(node, this.$vm[exp])
        new Watcher(this.$vm, exp, (val) => {
            fn && fn(node, val)
        })
    }
    textUpdater(node, val) {
        node.textContent = val
    }
    htmlUpdater(node, val) {
        node.innerHTML = val
    }
}

class Watcher {
    constructor(vm, key, updateFn) {
        this.vm = vm
        this.key = key
        this.updateFn = updateFn

        Dep.target = this
        this.vm[this.key]
        Dep.target = null
        // watchers.push(this)
    }

    update() { 
        // console.log(33333, this.key, this.vm[this.key])
        this.updateFn.call(this.vm, this.vm[this.key]); 
    }
}

class Dep {
    constructor() {
        this.deps = []
    }

    addDep(dep) {
        this.deps.push(dep)
    }

    notify() {
        this.deps.forEach(dep => dep.update())
    }
}