/**
 * @jest-environment jsdom
 */

const indexFile = require("./tests/indexFile.js")
const eventFire = require("./tests/eventFire.js")
const {
    challengeOne,
    challengeTwo,
    challengeThree
} = require("./script.js")

document.body.innerHTML = indexFile()
let consoleSpy = jest.spyOn(console, 'log')

describe("challenge-one should - ", () => {
    let button = document.getElementById("challenge-one")
    test("not do anything until clicked", () => {
        consoleSpy.mockReset()
        eventFire(button, 'click');
        expect(consoleSpy).toHaveBeenCalledTimes(0)
    })
    test('log to the console once clicked', () => {
        consoleSpy.mockReset()
        challengeOne()
        eventFire(button, 'click');
        expect(consoleSpy).toHaveBeenCalledTimes(1)
        expect(consoleSpy).toHaveBeenCalledWith("Hello World")
    })
})

describe("challenge-two should - ", () => {
    let button = document.getElementById("challenge-two")
    let ul = document.querySelector("ul")
    test("not have any list items until clicked", () => {
        eventFire(button, 'click')
        expect(ul.children.length).toEqual(0)
    })
    test("create and attach a list item when clicked", () => {
        challengeTwo()
        eventFire(button, 'click')
        expect(ul.children.length).toEqual(1)
        eventFire(button, 'click')
        expect(ul.children.length).toEqual(2)
    })
    test("insert text into list items when created", () => {
        expect(ul.children[0].innerHTML).toEqual("New List Item")
        expect(ul.children[1].innerHTML).toEqual("New List Item")
    })
})

describe("challenge-three's rainbow should - ", () => {
    let rainbow = document.getElementById("rainbow")
    let button = document.getElementById("challenge-three")
    test("have a default colour of voilet", () => {
        expect(window.getComputedStyle(rainbow).getPropertyValue("background-color")).toEqual('rgb(238, 130, 238)')
    })
    test("change to indigo after clicking button", () => {
        challengeThree()
        eventFire(button, 'click');
        expect(window.getComputedStyle(rainbow).getPropertyValue("background-color")).toEqual('rgb(75, 0, 130)')
    })
    test("change to blue after clicking again", () => {
        eventFire(button, 'click');
        expect(window.getComputedStyle(rainbow).getPropertyValue("background-color")).toEqual('rgb(0, 0, 255)')
    })
    test("cycle through all the colours with each click", () => {
        eventFire(button, 'click');
        expect(window.getComputedStyle(rainbow).getPropertyValue("background-color")).toEqual('rgb(0, 128, 0)')
        eventFire(button, 'click');
        expect(window.getComputedStyle(rainbow).getPropertyValue("background-color")).toEqual('rgb(255, 255, 0)')
        eventFire(button, 'click');
        expect(window.getComputedStyle(rainbow).getPropertyValue("background-color")).toEqual('rgb(255, 165, 0)')
        eventFire(button, 'click');
        expect(window.getComputedStyle(rainbow).getPropertyValue("background-color")).toEqual('rgb(255, 0, 0)')
    })
    test("cycle back to violet after reaching red", () => {
        eventFire(button, 'click');
        expect(window.getComputedStyle(rainbow).getPropertyValue("background-color")).toEqual('rgb(238, 130, 238)')
    })
})

