const Koa = require('koa')

const app = new Koa()

const config = require('./conf')
const {loadModel} = require('./framework/loader')

loadModel(config)(app)



// user /api/user
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

const restful = require('./framework/router')
app.use(restful)


const port = 3000
app.listen(port, () => {
    console.log('app listen at '+port)
})