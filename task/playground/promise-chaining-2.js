require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndDelete('5d7e6ba65c447716f0b00c1c', { age: 1 })
    .then((user) => {
        console.log(user)
        return Task.countDocuments({ completed: false })
    })
    .then((result) => {
        console.log(result)
    })
    .catch((e) => {
        console.log(e)
    })

