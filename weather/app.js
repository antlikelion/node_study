const request = require('request')

const url = 'https://api.darksky.net/forecast/eeb51ccfe4648db3a9a4340f355f3c70/37.8267,-122.4233?lang=ko'

request({ url: url, json: true }, (error, response) => {
    let summary = response.body.daily.data[0].summary
    let degree = response.body.currently.temperature
    let chanceOfRain = response.body.currently.precipProbability
    console.log(`${summary} It is currently ${degree} degrees out. There is a ${chanceOfRain * 100}% chance of rain`)
})