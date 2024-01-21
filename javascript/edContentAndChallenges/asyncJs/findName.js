const fs = require('fs'); 


function checkList(name, callback) {
    fs.readFile('./names.txt', 'utf8', (error, data) => callback(error, data, name))
}

function findName(error, data, name) {
    //code here
    
}

/* The tests for this challenge pass in names to test.
 You can get arguments passed in to node using the process.argv object.
 The line below removes the first two elements of the process.argv array.
 The first two elements are the full path to node and the full path to the JS file.
 Anything we pass as an argument will be additional elements in process.argv.
 Try console logging process.argv to get a better understanding of how this works.
*/
const names = process.argv.slice(2)
// loop through each name passed as an argument and call checkList
names.forEach((name) => {
    checkList(name, findName)
})

// Once you implement findName, you can test this yourself from terminal:
// node findName.js alex
// or pass multiple names (this is what clicking 'Run' will do):
// node findName.js alex micheal pikachu