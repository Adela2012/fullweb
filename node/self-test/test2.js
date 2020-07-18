// 多项式

function fn1 (n, arr, x) {
    let res = arr[0]
    for (let i = 1 ; i <= n; i++) {
        res += arr[i] * Math.pow(x, i)
    }
    return res
}

function fn2 (n, arr, x) {
    let res = arr[n]
    for (let i = n - 1 ; i >= 0; i--) {
       res = arr[i] + x * res
    }
    return res
}


let arr = []
function createArr(N) {
    for (let i = 0; i <= N; i++) {
        arr[i] = i
    }
}

let N = 10000000
createArr(N)

function compareTime(fn) {
    let a = Date.now()
    let r = fn(N, arr, 0.9)
    console.log('time: ', Date.now() - a, r)
}


compareTime(fn1)
compareTime(fn2)
