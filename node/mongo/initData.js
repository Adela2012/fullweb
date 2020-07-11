const  mongodb = require('./models/db')

mongodb.once('connect', async () => {
    console.log('connect success')

    const col = mongodb.col('fruits')

    await col.deleteMany()

    const data = new Array(100).fill().map((v, i) => {
        return {
            name: 'xxx' + i,
            price: i,
            category: Math.random() > 0.5 ? '蔬菜' : '水果'
        }
    })

    await col.insertMany(data)
    console.log('insert success');
    
})