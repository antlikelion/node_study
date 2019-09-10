const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return "Your notes..."
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const afterRemoveNotes = notes.filter(function (note) {
        return note.title !== title
    })
    if (afterRemoveNotes.length === notes.length) {
        console.log(chalk.bgRed('해당 제목의 note가 없습니다.'))
    } else {
        saveNotes(afterRemoveNotes)
        console.log(chalk.bgGreen(`제목 : ${title}의 note를 삭제했습니다.`))
    }

    // const originalLength = notes.length
    // for (i = 0; i < originalLength; i++) {
    //     if (notes[i].title === title) {
    //         notes.splice(i, 1)
    //         saveNotes(notes)
    //         console.log(`제목 : ${title}의 note를 삭제했습니다.`)
    //         break;
    //     }
    // }
    // if (notes.length === originalLength) {
    //     console.log("해당 제목의 note가 없습니다.")
    // }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
}