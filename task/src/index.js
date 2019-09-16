const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000
// 헤로쿠에 배포할 게 아니라면 필요 없는 건가용?

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'tkfkddmfdnlgkdu'
    const hashedPassword = await bcrypt.hash(password, 8)
    // 단방향 암호화(복호화가 불가능함)
    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('tkfkddmfdnlgkdu', hashedPassword)
    console.log(isMatch)
}

myFunction()