
const  net  = require('net')
const server = net.createServer()
const clientList = []
server.on('connection', (client) => {
   client.write('Hi\n')
   clientList.push(client)
   client.on('data', data => {
        clientList.forEach(v => {
            console.log(data.toString())
            v.write(data)
        })

   })
})

server.listen(9000)