const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = `https://api.darksky.net/forecast/eeb51ccfe4648db3a9a4340f355f3c70/${latitude},${longtitude}?lang=ko`
    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find forcasting information. Try another search.', undefined)
        } else {
            summary = response.body.daily.data[0].summary
            degree = response.body.currently.temperature
            chanceOfRain = response.body.currently.precipProbability
            callback(undefined, `${summary} It is currently ${degree} degrees out. There is a ${chanceOfRain * 100}% chance of rain`)
        }
    })
}

module.exports = forecast
