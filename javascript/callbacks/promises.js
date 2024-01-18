function adder(a, b) {
    return a + b
}

async function adderPromise(x, y) {
        if (typeof x === 'number' && typeof y === 'number') {
            const answer = adder(x, y)
            return answer
        } else {
            throw 'x and y must be a number'
        }
}

// adderPromise(10, 20)
//     .then(value => {adderPromise(value, 100)
//         .then(answer => console.log(answer))
//     })
//     .catch(err => console.error(err))

async function doStuff() {
const value = await adderPromise(10, 20)
console.log(value)
}
    // .then(value => adderPromise(value, 100))
    // .then(answer => console.log(answer))
    // .catch(err => console.error(err))

doStuff()

// adderPromise(12, 16.23)
//     .then(value => alert(value))
//     .catch(err => console.error(err))

console.log("Not waiting for resolve")