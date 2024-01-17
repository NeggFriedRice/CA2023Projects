/**
 * @jest-environment jsdom
 */
module.exports = function indexFile() {
    return `
		<div id="container">
			<div class="column">
				<button id="challenge-one">Click Me</button>
			</div>
			<div class="column">
				<button id="challenge-two">Click Me</button>
				<ul></ul>
			</div>
			<div class="column" id="rainbow" style="background-color: rgb(238, 130, 238);">
				<button id="challenge-three">Click Me</button>
			</div>
		</div>
    `
}
