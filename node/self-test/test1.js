function printA(A) {
    for (let i = 1; i <= A; i++) {
        console.log(i)
    }
}

function printB(B) {
    if (B) {
        printB(B - 1)
        console.log(B)
    }
}

let a = Date.now()
printA(10000)
// printB(10000)

console.log('time: ', Date.now() - a)
