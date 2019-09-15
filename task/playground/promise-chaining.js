require('../src/db/mongoose')
const User = require('../src/models/user')

// 5d7e4faad247ff28281043d6

User.findByIdAndUpdate('5d7e4faad247ff28281043d6', { age: 1 })
    .then((user) => {
        console.log(user)
        return User.countDocuments({ age: 1 })
    })
    .then((result) => {
        console.log(result)
    })
    .catch((e) => {
        console.log(e)
    })