document.getElementById("button").addEventListener('click', () => {
    $.getJSON("https://icanhazdadjoke.com/", (response) => {
        console.log("Got joke: " + response.joke)
    })
})

function sendResult(theResult) {
    return new Promise((reject, resolve) => {
      if (!theResult) {
        reject("Result could not be determined")
      } 
      resolve(theResult)
    })
  }
  
  module.exports = {sendResult}
  
  function sendResult(theResult) {
	return new Promise((resolve, reject) => {
		if (!theResult) {
			reject("Result could not be determined")
		}
		resolve(theResult);
	})
}