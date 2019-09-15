// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
// 127.0.0.1 대신 localhost를 쓰면 속도가 느려지는 등 여러 문제가 있다고 함.
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: '우인이',
        age: 28
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    })

    // db.collection('users').insertMany([{
    //     name: '홍길동',
    //     age: 50
    // }, {
    //     name: '임꺽정',
    //     age: 60
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         describe: '전공중국어2 1과 회화1 암송',
    //         boolean: false
    //     },
    //     {
    //         describe: '60db회식',
    //         boolean: false
    //     },
    //     {
    //         describe: '파이빌 커피타임',
    //         boolean: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('오류가 났군요')
    //     }

    //     console.log(result.ops)
    // })
})
