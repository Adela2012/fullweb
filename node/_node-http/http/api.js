const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const { method, url, headers } = req
    // console.log('method, url', method, url)
    // console.log('cookie', headers.cookie)
    if (method == 'GET' && url === '/') {
        fs.readFile('./index.html', (err, data) => {
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })
    } else if (method == 'GET' && url === '/api/users') {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Set-Cookie', 'cookie1=va222;')
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ name: 'tom' }))
    } else if (method == "OPTIONS" && url == "/api/users") {
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Headers": "X-Token,Content-Type",
            "Access-Control-Allow-Methods": "PUT"
        }); res.end();
    } else if (method === 'POST' && url === '/api/save'){
        let reqData = []
        let size = 0
        req.on('data', data=> {
            reqData.push(data)
            size += data.length
        })
        req.on('end', function () {
            const data = Buffer.concat(reqData, size)
            console.log('data', size, data.toString())

            res.end(`formdata: ${data.toString()}`)
        })
    }
}).listen(4000, () => {
    console.log('listen at 4000')
})