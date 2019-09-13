const https = require('https')
const url = 'https://api.darksky.net/forecast/eeb51ccfe4648db3a9a4340f355f3c70/40,-75?lang=ko'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        // 버퍼를 문자열로
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        // JSON string을 JSON객체로
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()

// const forecast = (latitude, longtitude, callback) => {
//     request({ url, json: true }, (error, { body }) => { // response내부의 body

//         if (error) {
//             callback('Unable to connect to forecast services!', undefined)
//         } else if (body.error) {
//             callback('Unable to find forcasting information. Try another search.', undefined)
//         } else {
//             summary = body.daily.data[0].summary
//             degree = body.currently.temperature
//             chanceOfRain = body.currently.precipProbability
//             callback(undefined, `${summary} It is currently ${degree} degrees out. There is a ${chanceOfRain * 100}% chance of rain`)
//         }
//     })
// }

// module.exports = forecast