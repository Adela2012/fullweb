// const app = new (require('koa'))()
// const {initRouter} = require('./igg-loader')
// app.use(initRouter().routes())
// app.listen(3000)

const igg = require('./igg')
const app = new igg() 
app.start(3000)