// let str = "Hello World!"

// console.log(str.replaceAll('o', '---'))


// console.log(`Hello, ${str}!`)
// console.log(`Answer: ${5 * 10}`)

// console.log(Math.floor(3/2))

// let x = 5
// console.log(x++)

// console.log(x)

// const Utils = {
//     add: (x, y) => x + y,
//     double: (x) => x * 2,
//     squares: (arr) => arr.map(x => x ** 2)
// }
// const add = (x, y) => x + y
// // const square = (x) => x ** 2
// const double = (x) => x * 2
// // const result = numbers.map(double) becomes the below function
// const squares = arr => arr.map(x => x ** 2)

// // function add(x, y) {
// // return x + y
// // }

// console.log(add(10, 34))
// // console.log(square(10))

// const numbers = [12, 50, 44, 32, 2]
// const result = Utils.squares(numbers)
// console.log(result)

// const people = ["Matt", "John", "Mary", "Kate"]

// // first = people[0]
// // second = people[1]

// // Create a variable called first and second, and take the first element and second element from people
// const [first, second, ...others] = people

// console.log(first, second, others)

const bobBirds = ["Robin", "Crow"]
const sallyBirds = ["Bluejay", "Cardinal"]

const allBirds = [...bobBirds, ...sallyBirds, "Kookaburra"]

console.log(allBirds)
console.log(bobBirds)