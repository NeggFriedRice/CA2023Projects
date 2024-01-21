const { group, error } = require('console');
const fs = require('fs');

// For testing in terminal
const testFile = "./students.txt"
const emptyFile = "./empty.txt"

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
    if((!list || list.length === 0) && size > 0) {
        throw new Error("List is empty. Cannot create a group of size " + size)
    }
    if(size > list.length)
        throw new Error("Group too large. Size limited to " + list.length)
    //create a copy of the array we pass in, so we don't mutate it
    let copy = [...list];
    let group = [];
    // loop the number of times specified by size argument
    for (let i=0; i < size; i++) {
        //grab a random index from copy
        const randomIndex = Math.floor(Math.random() * copy.length);
        //splice returns an array, but it also mutates the array it's performed on. so when we take out the random index we make sure it can't be assigned again
        group.push(copy.splice(randomIndex, 1)[0]);
    }
    return group
}

function getStudentList(file, size) {
    return getData(file)
        // take the data returned from getData and pass it to createList to create an array of names
        .then((data) => createList(data))
        // The previous promise should resolve to an array of people. Pass it to createGroup
        .then((studentsArray) => createGroup(studentsArray, size))
        .catch((error) => {
            throw error.message
        })
}

module.exports = {getData, getStudentList}

getStudentList(testFile, 2).then((list) => console.log(list))