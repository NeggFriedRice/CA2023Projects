function squareNumber(number) {
    return new Promise((resolve, reject) => {
        if (typeof number != 'number') {
            reject(new Error("That's not something I can calculate"))
        } else {
        resolve(number * number)
        }
    })
}

squareNumber(5)
    .then(squaredNumber => console.log(`The squared number is ${squaredNumber}`))
    .then(squaredNumber => console.log(`Here's the squarednumber again ${squaredNumber}`))