// const hbs = require('hbs')
const path = require('path')
const express = require('express')

console.log(__dirname)

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', { // view폴더에 있는 hbs의 파일명
        title: 'Weather App',
        name: '이인우'
    })

})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About me",
        name: "이인우"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: "무엇을 도와드릴까요?"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '흐림',
        location: "런던"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})