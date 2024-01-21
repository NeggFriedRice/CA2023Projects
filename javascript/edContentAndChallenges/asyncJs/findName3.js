const fs = require('fs'); 


function checkList(name, callback) {
    fs.readFile('./names.txt', 'utf8', (error, data) => callback(error, data, name))
}

function findName(error, data, name) {
    namesArray = data.toString().split('\n')
    if (error) {
        console.log(error)
    } else if (namesArray.includes(name)) {
        console.log(`${name} is in the list`)
    } else {
        console.log(`${name} is not in the list`)
    }
    
}

const names = process.argv.slice(2)
console.log(names)
// loop through each name passed as an argument and call checkList
names.forEach((name) => {
    checkList(name, findName)
})
