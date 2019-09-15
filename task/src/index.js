const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

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

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})