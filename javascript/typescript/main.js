"use strict";
// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}`)
// }
function printCoord(pt) {
    console.log(`The coord X is ${pt.x}`);
    console.log(`The coord Y is ${pt.y}`);
    if (pt.z) {
        console.log(`The coord Z is ${pt.z}`);
    }
}
printCoord({ x: 3, y: 7, z: 4 });
const printId = (id) => {
    console.log(`Your ID is: ${id}`);
};
const input = '12345';
printId(input);
printId(789);
var Sizes;
(function (Sizes) {
    Sizes[Sizes["S"] = 0] = "S";
    Sizes[Sizes["M"] = 1] = "M";
    Sizes[Sizes["L"] = 2] = "L";
    Sizes[Sizes["XL"] = 3] = "XL";
})(Sizes || (Sizes = {}));
const item = {
    colour: "white",
    size: Sizes.M
};
console.log(Sizes);
let ted = {
    name: 'Ted',
    age: 15,
    breed: 'mini schnauzer'
};
