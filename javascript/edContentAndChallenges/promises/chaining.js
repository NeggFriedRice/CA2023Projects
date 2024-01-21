function generateRandomNumber(limit) {
    console.log("Generating number between 1 and " + limit)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof limit !== 'number') {
                reject(new Error("Input must be a number"))
            }
            const randomNumber = Math.floor(Math.random() * limit) + 1
            resolve(randomNumber)
        }, 1000)
    })
}

function doubleNumber(num) {
    return new Promise((resolve, reject) => {
        if (num < 0) {
            reject(new Error("Can't double negative number with simple math"))
        }
        resolve(num * 2)
    })
}

function logIfSmall(number) {
    if (number > 15) {
        throw new Error("That number is too big")
    } else {
        console.log("The doubled number is " + number)
    }
}

generateRandomNumber(10)
    .then((number) => {
        console.log("The number is " + number)
        return number
    })
    .then(doubleNumber)
    .then(logIfSmall)
    .catch((error) => console.error("Caught error: " + error.message))