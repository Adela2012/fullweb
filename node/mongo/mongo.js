(async () => {
    const {MongoClient} = require('mongodb')
    const client = new MongoClient(
        'mongodb://localhost: 27017',
        {
            useNewUrlParser: true
        }
    )
    let ret = await client.connect()
    // console.log(ret)
    const db = client.db('test')
    const fruits = db.collection('fruits')

    ret = await fruits.insertOne({
        name: '芒果',
        price: 23.3
    })
    console.log(2222, JSON.stringify(ret))

    ret = await fruits.findOne()
    console.log(333, ret)

    ret = await fruits.updateOne({
        name: '芒果'
    }, {$set: {name: '苹果'}})

    console.log(4444, JSON.stringify(ret.result))


})()