///count number of word
const fs = require('fs')

const wordCount = require("word-count");

fs.readFile('Student.txt', "utf-8", (err, data) => {
    if (err) throw err;
    const count = wordCount(data)
    console.log(count)
});

// const data = fs.readFile('Student.txt', (err, data) => {
//     if (err) throw err;
//     const detail = console.log(data.toString())
//     const word = data.split(" ").length
//     console.log(word)


// });
//     console.log(detail.Split(" ").length)
// });
