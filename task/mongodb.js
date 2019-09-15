// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
// 127.0.0.1 대신 localhost를 쓰면 속도가 느려지는 등 여러 문제가 있다고 함.
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: '이인우',
        age: 28
    })
})
