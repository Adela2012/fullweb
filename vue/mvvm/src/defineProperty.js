

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        get() {
            console.log('get ', key)
            return val
        },
        set(newVal) {
            if (newVal !== val) {

                console.log('set ', key)
                val = newVal
            }
        }
    })
}

const foo = { }
defineReactive(foo, 'foo', 'foo')

foo.foo

foo.foo = 'abc'