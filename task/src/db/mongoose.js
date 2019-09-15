const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('password라는 문자열은 비밀번호에 포함할 수 없습니다.')
            }
        },
        minlength: 7,
        trim: true,
    }
})

// const me = new User({
//     name: "홍길동",
//     email: "mail@mail.com",
//     password: '해피해피해피이마트'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const Task = mongoose.model('Task', {
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

const chinese = new Task({
    description: "   중국어회화2 예습   "
})

chinese.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})