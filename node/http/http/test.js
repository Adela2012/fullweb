const http = require('http');

const fs = require('fs') 
const rs2 = fs.createReadStream('./img/1f60b.png') 
const ws2 = fs.createWriteStream('./img/copy.png') 
rs2.pipe(ws2);
console.log(222, rs2)


const server = http.createServer((request, response) => {

    // console.log('there is a request', getPrototypeChain(request));
    
    // response.end('a response from server');

    const {url, method, headers} = request;

    if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) { 
         fs.createReadStream('.'+url).pipe(response);
    }
}); server.listen(3000);


// function getPrototypeChain(obj) {

//     var protoChain = [];

//     while (obj = Object.getPrototypeOf(obj)) {//返回给定对象的原型。如果没有继承属 性，则返回 null 。
//         // console.log('>>>>>>>>>',obj)
//         protoChain.push(obj);

//     } 
//     protoChain.push(null); 
//     return protoChain;

// }


