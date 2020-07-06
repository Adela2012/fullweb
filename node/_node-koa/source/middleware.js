// const add = (a, b) =>  a + b

// const square = x => x * x


// const compose = (fn1, fn2) => (...arg) => fn2(fn1(...arg))


// const compose = (...[first, ...other]) => (...arg) => {
//     let ret = first(...arg)
//     other.forEach(fn => {
//         ret = fn(ret)
//     })
//     return ret
// }


// const fn = compose(add, square, square)

// console.log(fn(1, 3))

function compose(middlewares) {
    return function() {
        return dispatch(0)

        function dispatch(i) {
            const fn = middlewares[i]

            if(!fn) return Promise.resolve()

            return Promise.resolve(
                fn(function next() {
                    return dispatch(i + 1)
                })
            )
        }
    }
}


async function fn1(next) { 
    console.log("fn1"); 
    await next(); 
    console.log("end fn1"); 
}

async function fn2(next) { 
    console.log("fn2"); 
    const start = Date.now()
    await delay(); 
    const end = Date.now()
    console.log(end - start)
    await next(); 
    console.log("end fn2"); 
}

function fn3(next) { 
    console.log("fn3"); 
}

function delay() {

    return new Promise((reslove, reject) => { 
        setTimeout(() => { 
            reslove(); 
        }, 2000); 
    });

}

const middlewares = [fn1, fn2, fn3]; 
const finalFn = compose(middlewares); 
finalFn();