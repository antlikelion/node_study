require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// 5d7e4faad247ff28281043d6

// User.findByIdAndUpdate('5d7e4faad247ff28281043d6', { age: 1 })
//     .then((user) => {
//         console.log(user)
//         return User.countDocuments({ age: 1 })
//     })
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((e) => {
//         console.log(e)
//     })

// const updateAgeandCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age })
//     const count = await User.countDocuments({ age })
//     return count
// }

// updateAgeandCount('5d7e4faad247ff28281043d6', 2).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const countIncomplete = await Task.countDocuments({ completed: false })
    return countIncomplete
}

deleteTaskAndCount("5d7e54b37e100d4c38439283")
    .then((count) => {
        console.log(`진행중인 task 수 : ${count}`)
    })
    .catch((e) => {
        console.log(e)
    })