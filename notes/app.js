const fs = require('fs');

// fs.writeFileSync('notes.txt', '내 이름은 이인우다.')

fs.appendFileSync('./notes.txt', '\n자료')
