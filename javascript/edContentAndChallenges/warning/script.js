let button = document.getElementById("makeItRed")
let warningDiv = document.getElementById("warning")


button.addEventListener('click', makeRed)

function makeRed() {
    if (warningDiv.style.backgroundColor === "red") {
        warningDiv.style.backgroundColor = ""
        button.innerText = "Make It Red!"
    } else {
        warningDiv.style.backgroundColor = "red"
        button.innerText = "Clear warning"
    }
}