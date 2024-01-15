// const newDiv = document.createElement('div')
// newDiv.innerHTML = "<h3> Awesome content</h3>"
// newDiv.id = 'spam'
// newDiv.style.color = 'blue'
// document.body.insertBefore(newDiv, document.querySelector('ul'))

// const myColor = 'grey'
// document.body.innerHTML += `<div id="spam" style="color: ${myColor}"><h3>Awesome content</h3></div>`

const items = [
    "Adding to the DOM",
    "Querying the DOM",
    "Changing the DOM",
    "Event Listeners"
]

const ul = document.querySelector("ul")

// for (let item of items) {
//     ul.innerHTML += `<li>${item}</li>`
// }

const lis = items.map(item => `<li>${item}</li>`)
ul.innerHTML = lis.join("")