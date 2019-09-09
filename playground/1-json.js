const fs = require('fs')

// const book = {
//     title: '책제목임',
//     author: '저자임'
// }

// const bookJSON = JSON.stringify(book)
// // 자스 객체를 json으로 바꾸는 게 아니라 json형태의 string으로 바꾸는 것임!

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = "이인우"
data.age = 28
const saveJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', saveJSON)