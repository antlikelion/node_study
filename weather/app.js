const request = require('request')

// const url = 'https://api.darksky.net/forecast/eeb51ccfe4648db3a9a4340f355f3c70/37.8267,-122.4233?lang=ko'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         let summary = response.body.daily.data[0].summary
//         let degree = response.body.currently.temperature
//         let chanceOfRain = response.body.currently.precipProbability
//         console.log(`${summary} It is currently ${degree} degrees out. There is a ${chanceOfRain * 100}% chance of rain`)
//     }
// })

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW50bGlrZWxpb24iLCJhIjoiY2swaGtud3Z4MDNsMjNocGk3d2d3bGVzeiJ9.oOpboYAopMLirRQgMXCmOg&language=ko&limit=1'

request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to geocoding service!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location')
    } else {
        let latitude = response.body.features[0].center[1]
        let longtitude = response.body.features[0].center[0]
        console.log(`위도 : ${latitude}, 경도 : ${longtitude}`)
    }
})