function adder(a, b) {
    return a + b
}
function adderPromise(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x === 'number' && typeof y === 'number') {
            const answer = adder(x, y)
            resolve(answer)
        } else {
            reject('x and y must be a number')
        }
})
}

// adderPromise(10, 20)
//     .then(value => {adderPromise(value, 100)
//         .then(answer => console.log(answer))
//     })
//     .catch(err => console.error(err))

adderPromise(10, 20)
    .then(value => adderPromise(value, 100))
    .then(answer => console.log(answer))
    .catch(err => console.error(err))


// adderPromise(12, 16.23)
//     .then(value => alert(value))
//     .catch(err => console.error(err))

console.log("Not waiting for resolve")