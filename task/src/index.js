const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000
// 헤로쿠에 배포할 게 아니라면 필요 없는 건가용?

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then((result) => {
        res.send(result)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    // 몽고디비 모듈과는 달리 몽구스 디비는 ObjectID로 변환해줄 필요가 없음
    User.findById(_id).then((user) => {
        if (!user) { // 해당 id에 맞는 user가 없어도 reject되지 않고 null값을 반환하기 때문에 if문 활용
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then((result) => {
        res.send(result)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if (!task) { // 해당 description에 맞는 user가 없어도 reject되지 않고 null값을 반환하기 때문에 if문 활용
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})