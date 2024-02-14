// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}`)
// }

// greet("Tom", new Date())
// let firstName: string = 'Tom'

// async function fn(x: Array<number>): Promise<number> {
//     return x.length
// }

// console.log(fn([1, 2, 3, 4]))

type Point = {
  x: number 
  y: number 
  z?: number 
}

function printCoord(pt: Point) {
  console.log(`The coord X is ${pt.x}`)
  console.log(`The coord Y is ${pt.y}`)
  if (pt.z) {
    console.log(`The coord Z is ${pt.z}`)
  }
}

printCoord({x: 3, y: 7, z: 4})

const printId = (id: number | string): void => {
  console.log(`Your ID is: ${id}`)
}

const input = '12345'
printId(input)
printId(789)


enum Sizes {
  S,
  M,
  L,
  XL
}

interface TShirt {
  colour: string
  size: Sizes
}

const item: TShirt = {
  colour: "white",
  size: Sizes.M
}

console.log(Sizes)

interface Animal {
  name: string
  age: number
}

interface Dog {
  breed: string
}

let ted: Animal & Dog = {
  name: 'Ted',
  age: 15,
  breed: 'mini schnauzer'
}