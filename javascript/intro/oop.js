// Python
// class Foo:
//     pass

// x = Foo()

// function Person(name, age) {
//     this.name = name
//     this.age = age

//     this.greet = () => {
//         console.log(`${this.name} is ${this.age} years old`)
//     }
// }

// const person = new Person("Matt", 51)
// person.age = 52

// person.greet()

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const person = new Person("Matt", 51)
console.log(person)