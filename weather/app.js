const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('London', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

module.exports = geocode


forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})