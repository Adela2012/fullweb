function fn1 (arg) {
    return arg+'1'
}

function fn2 (arg) {
    return arg+'2'
}


function fn3 (arg) {
    return arg+'3'
}


let a  = fn1(fn2(fn3('a')))


const compose = (...fns) => {
    if (fns.length === 0) return arg => arg
    if (fns.length === 1) return fns[0]
    return fns.reduce((accutor, cur) => (...arg) => accutor(cur(...arg)))
}

let b = compose(fn1, fn2, fn3)('b')
console.log(a, b)