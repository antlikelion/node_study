const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})
// 모델 선언은 대문자로 시작
const Task = mongoose.model('Task', taskSchema)

module.exports = Task
