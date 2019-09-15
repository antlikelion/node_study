// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
// 127.0.0.1 대신 localhost를 쓰면 속도가 느려지는 등 여러 문제가 있다고 함.
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID("5d7de8dd9514bf43f01eec7a") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 28 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 28 }).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID("5d7de4ba114d6c63f825f08e") }, (error, task) => {
        if (error) {
            return console.log(error)
        }
        console.log(task)
    })

    db.collection('tasks').find({ boolean: false }).toArray((error, tasks) => {
        console.log(tasks)
    })
})
