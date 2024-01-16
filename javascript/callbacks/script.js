// PART ONE OF LESSON
// Function visualiser
// https://pythontutor.com/render.html#mode=display

// function adder(x, y, cb) {
//     cb(x + y)
// }

// adder(5, 10, result => console.log(result))

// console.log('Done')

const req = new XMLHttpRequest()
req.open("GET", 'https://icanhazdadjoke.com/')
req.setRequestHeader('Accept', 'application/json')
req.send()

console.log('Request sent!')