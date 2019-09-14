const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
        helpText: "무엇을 도와드릴까요?",
        title: 'Help',
        name: "이인우"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '흐림',
        location: "런던"
    })
})

app.get('/help/*', (req, res) => {
    res.render('help_404', {
        title: "help_404",
        name: "이인우",
        message: "help와 관련한 페이지를 찾을 수 없습니다."
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        name: "이인우",
        message: "페이지를 찾을 수 없습니다."
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})