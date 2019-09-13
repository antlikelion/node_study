const request = require('request')

const url = 'https://api.darksky.net/forecast/eeb51ccfe4648db3a9a4340f355f3c70/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})