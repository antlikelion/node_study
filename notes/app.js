const validator = require('validator')
const notes = require('./notes')

console.log(notes())

console.log(validator.isURL('귀찮구나'))