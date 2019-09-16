const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

// 모델 선언은 대문자로 시작
const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function (next) {
    const user = this
    // 여기서 this는 몽고디비의 document를 가리킨다
    if (user.isModified('password')) {//처음 회원가입한 경우 + 비밀번호 변경한 경우
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User