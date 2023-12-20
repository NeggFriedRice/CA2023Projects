// Python
// age = 16
// if age >= 18:
//    print("Adult")
// else:
//    print("Child")

const age = 16

// if (age >= 18) {
//     console.log("Adult")
// } else if (age >= 13) {
//     console.log("Teen")
// } else {
//     console.log("Child")
// }

// Python - Ternary
// message = "Allowed" if age >= 18 else "Not allowed"

// const message = age >= 18 ? "Allowed" : "Not allowed"
// console.log(message)

const favBird = 'Dog'

switch (favBird) {
    case 'Raven':
    case 'Crow':
        console.log("You like crows")
        break
    case 'Robin':
        console.log("You like robins")
        break
    default:
        console.log("I don\'t know that bird!")
}