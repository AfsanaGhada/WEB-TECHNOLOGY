const fs = require('fs')

const stu = `
 101 Afsana 24010101633 1234567890 CSE 9.0
 102 Ruchi 24010101687 1234567890 CSE 9.87
 103 Vidhya 24010101603 1234567890 CSE 9.90
 104 Hina 24010101605 1234567890 CSE 10
 105 Priya 24010101643 1234567890 CSE 9.0

`

fs.writeFile('Student.txt', stu, "utf-8", (err) => {
    if (err) { throw err }
    console.log("success")
})






