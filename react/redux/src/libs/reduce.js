
// 思考：有如下函数，聚合成一个函数，并把第一个函数的返回值传递给下一个函数，如何处理。
function f1(arg) {  console.log("f1", arg);  return arg;}
function f2(arg) {  console.log("f2", arg);  return arg;}
function f3(arg) {  console.log("f3", arg);  return arg;}


function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((accumulator, func) => {
        return (...arg) => accumulator(func(arg))
    })

} 
    

console.log(compose(f1, f2, f3)("omg"))