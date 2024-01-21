const { group, error } = require('console');
const fs = require('fs');

// For testing in terminal
const testFile = "./students.txt"
const emptyFile = "./empty.txt"

// We're giving you this one - but make sure you understand what is happening in this function
function getData(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
              reject(error.message)
            }
            resolve(data);
        })
    })
}

// Given the string `data`, return an array of names
function createList(data) {
    return data.split("\n").filter((val) => val.length > 0)
}

function createGroup(list,size) {
    /*
      If the list is empty and size > 0, throw an Error with the message:
      "List is empty. Cannot great a group of size " + size

      If size is more than array.length, throw an Error with the message:
      "Group too large. Size limited to " + list.length

      If size and list are valid, return a array of size with random values from list
    */
    return new Promise((resolve, reject) => {
        if (list.length < 1) {
            reject("Empty list")
        } else if (size > list.length) {
            reject("Group size requested is bigger than list of names")
        } else {
            let group = []
            for (let i = 0; i < size; i++) {
                group.push(list[i])
            }
            resolve(group)
    }})}

//    if (list.length < 1 || size > 0) {
//     throw error("List is empty. Cannot create a group size " + size)
//    } else {
//     let group = []
//     for (let i = 0; i < size; i++) {
//         group.push(list[i])
//     }
//     return group
//     }
// }

// function getStudentList(file, size) {
//     /*
//       Use calls to getData, createList, and createGroup to return a Promise from this function that either resolves
//       to the list of students, or rejects with the correct error message.

//       Hint: Using promise chaining to make the implementation simpler
//     */
//     return new Promise((resolve, reject) => {
//         getData(file)
//             .then(data => {
//                 return data
//             })
//             .then(data => {
//                 let list = createList(data)
//                 return list
//             })
//             .then(list => {
//                 let group = createGroup(list, size)
//                 resolve(group)
//             })
//             .catch(err => console.error(err))
//     })
// }

function getStudentList(file, size) {
    return getData(file)
               .then(data => {
                   let list = createList(data)
                   return list
               })
               .then(list => {
                   let group = createGroup(list, size)
                   return group
               })
               .catch(err => console.error(err))
}
    

getStudentList(testFile, 2).then((list) => console.log(list))
// getStudentList(emptyFile, 2).then((data) => console.log(data)).catch((error) => console.log(error))
// getStudentList(testFile, 50).then((data) => console.log(data)).catch((error) => console.log(error))

// For testing in terminal
// getStudentList(testFile, 2).then((list) => console.log(list))  // should print an array with 2 names
// getStudentList(emptyFile, 2).then((data) => console.log(data)).catch((error) => console.log(error)) // should print List is empty error
// getStudentList(testFile, 50).then((data) => console.log(data)).catch((error) => console.log(error)) // should print Group too large error


module.exports = {getData, getStudentList}

// === Prototype testing implementation
// getData(testFile)
//     .then(data => {
//         let a = createList(data)
//         console.log(a)
//         return a
//     })
//     .then(a => {
//         let b = createGroup(a, 2)
//         console.log(b)
//         return b
//     })
//     .then(c => console.log(c))