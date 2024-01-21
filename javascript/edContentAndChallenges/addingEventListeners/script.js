function challengeOne() {
    let button = document.querySelector("#challenge-one")
    button.addEventListener("click", function (event) {
        console.log("Hello World!")
    })
}

function challengeTwo() {
    // Each button press = append new li item "New item"
    // 1. Find the ul
    let ul = document.querySelector("ul")
    // 2. Add event listener for button click on challenge-two
    // 2.1 Find the button
    let button = document.querySelector("#challenge-two")
    // 2.2 Add the event listener for click
    button.addEventListener("click", function (event) {
        // Add new list item
        ul.innerHTML += `<li>New List Item</li>`
    })


}


function challengeThree() {
    const colours = ['rgb(238, 130, 238)', 'rgb(75, 0, 130)', 'rgb(0, 0, 255)', 'rgb(0, 128, 0)', 'rgb(255, 255, 0)', 'rgb(255, 165, 0)', 'rgb(255, 0, 0)']
    // 1. Each button click should cycle through the colours in const
    // 2. Identify button
    let button = document.querySelector("#challenge-three")
    // 3. Find the current colour in the background and match it to the index in the array
    const element = document.querySelector("style")
    const style = getComputedStyle(element)
    const backgroundColour = style.backgroundColour
    console.log(backgroundColour)
}

function activity() {
    challengeOne()
    challengeTwo()
    challengeThree()
}

try {
    module.exports = {
        challengeOne,
        challengeTwo,
        challengeThree
    } 
} catch {
}
