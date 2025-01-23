const fs = require('fs')

const wordCount = require("word-count");

fs.readFile('Student.txt', "utf-8", (err, data) => {
    if (err) throw err;
    let vowel = data.match(/[aeiou]/gi);

    console.log("number of vowel:", vowel ? vowel.length : 0)
});