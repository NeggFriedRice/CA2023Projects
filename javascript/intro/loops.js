// let count = 3

// while (count > 0) {
//     console.log(count--)
// }

// Python
// for i in range(10):
//     print(i)

// 3-part for loop
// initialiser runs once, before the first iteration
// condition will be tested before every iteration
// post-iteration executes after every iteration

// for (initialiser; condition; post-iteration)

// const numbers = [1, 2, 5, 21, 44, 37]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

const favFoods = ["pizza", "pasta", "tacos"]

// Python
// for item in favFoods:
//    print(item)

for (let item of favFoods) {
    console.log(item)
}

// Same as

favFoods.forEach(food => console.log(food))