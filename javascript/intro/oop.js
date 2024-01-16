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

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// const person = new Person("Matt", 51)
// console.log(person)

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     greet() {
//         console.log(`${this.name} is ${this.age} years old`)
//     }
// }

// const person = new Person("Matt", 51)

// person.greet()

class Rectangle {

    #width
    #height

    constructor(width, height) {
        this.#width = width
        this.#height = height
    }

    get width() { return this.#width }

    set width(value) {
        if (typeof value === 'number') {
        this.#width = value
        } else {
            // Raise an exception
        }
    }

    get area() {
        return this.#width * this.#height
    }
}



// Python
// class Square(Rectangle):

class Square extends Rectangle {

    constructor(size=5) {
        super(size, size)
    }
}

const x = new Square()
console.log(x.area)