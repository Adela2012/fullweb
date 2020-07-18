// 数组区间最大


function sum(K, arr) {
    let  res = 0, prev = 0, target = 0
    for (let i = 0; i < arr.length; i++) {
        if (i < K) {
                res += arr[i]
        } else {
                prev = res
                res += arr[i] - arr[i - K]
                target = Math.max(prev, res)
        }
    }
    return target
}



let arr = [-2, 11, -4, 13, -5, -2]


console.log(sum(3, arr))
