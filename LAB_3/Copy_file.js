//copy content Student.txt to Stu_data.txt
const fs = require('fs')

const copyFileSync = fs.copyFileSync('Student.txt', 'stu_data');
console.log("data copy to a file Student.txt to Stu_data.txt")
