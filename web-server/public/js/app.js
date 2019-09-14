console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             return console.log(`오류 : ${data.error}`)
//         }
//         console.log(`지역 : ${data.location}`)
//         console.log(`예보 : ${data.forecast}`)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return console.log(`오류 : ${data.error}`)
            }
            console.log(`지역 : ${data.location}`)
            console.log(`예보 : ${data.forecast}`)
        })
    })
})