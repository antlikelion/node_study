const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
let place = process.argv[2]

if (!place) {
    return console.log('주소를 입력해주세요')
} else {
    geocode(place, (error, data) => {
        if (error) {
            return console.log('Error', error)
        } // if else 안쓰기 위해 return 구문 썼음
        forecast(data.latitude, data.longtitude, (error, forecastData) => {
            if (error) {
                return console.log('Error', error)
            } // if else 안쓰기 위해 return 구문 썼음
            console.log(data.location)
            console.log(forecastData)
        })
    })
}




