(async () => {
    const Sequelize = require('sequelize')


    const sequelize = new Sequelize('test', 'root', 'admin123', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false
    })

    const Fruit = sequelize.define('Fruit', {
        name: { type: Sequelize.STRING(20), allowNull: false },
        price: { type: Sequelize.FLOAT, allowNull: false },
        stock: { type: Sequelize.INTEGER, defaultValue: 0 }
    })

    let ret = await Fruit.sync({force: true})
    // let ret = await Fruit.sync()

    console.log('sync', ret)

    ret = await Fruit.create({
        name: 'apple',
        price: 3.4
    })

    console.log('create', ret)

    const find = async () => {
        Fruit.findAll()
    }

    const {asyncFun} = require('./async')
    asyncFun(find, 20, 100)

})()