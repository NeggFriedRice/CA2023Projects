// PART ONE OF LESSON
// Function visualiser
// https://pythontutor.com/render.html#mode=display

// function adder(x, y, cb) {
//     cb(x + y)
// }

// adder(5, 10, result => console.log(result))

// console.log('Done')

function getJoke() {
    return new Promise((resolve, reject) => {
    // 2. Create a new XHR object
    const req = new XMLHttpRequest()
    // 3. Add listener for when the response is received and parsed
    // 9. Listener callback is triggered (event => cb(event.target.response.joke)), which in turn calls cb, passing the joke
    req.addEventListener("load", event => resolve(event.target.response.joke))
    // 4. Open the URL with the appropriate verb
    req.open("GET", 'https://icanhazdadjoke.com/')
    // 5. Set Accept header so server gives us JSON
    req.setRequestHeader('Accept', 'application/json')
    // 6. Set responseType so XHR object parses the JSON
    req.responseType = 'json'
    // 7. Send the request, then immediately return from getJoke (i.e. don't wait!)
    req.send()
    })
}

// 1. Call getJoke and pass a callback function
// 10. Callback is called via cb in the load listener in getJoke, receiving the joke
getJoke()
    .then(joke => console.log(joke))

// 8. getJoke returned immediately
console.log('Request sent!')