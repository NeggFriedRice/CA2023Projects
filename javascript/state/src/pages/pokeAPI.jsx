import React, { useState, useEffect } from 'react'

const PokeAPI = () => {

// States
let [pokeNum, setPokeNum] = useState(1)
let [pokeName, setPokeName] = useState("bulbasaur")
let [pokeSprite, setPokeSprite] = useState("")


function capitalise(string) {
    return string[0].toUpperCase() + string.slice(1)
}

function randomNum() {
    return Math.floor(Math.random() * 808)
}

function getInput() {
    let input = document.getElementById("pokeSearch")
    setPokeName(input.value.toLowerCase())
}


useEffect (() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
    .then(response => response.json())
    .then(data => setPokeName(capitalise(data.name)))
}, [pokeNum])

useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`)
        .then(data => data.json())
        .then(obj => setPokeSprite(obj.sprites.front_default))
        .catch(err => {
            alert("Pokemon not found!")
            setPokeSprite("Broken")
            setPokeName("Not found")
        })
}, [pokeName]) 

  return (
    <>
        <h1>Pokemon Search</h1>
        <div className="poke-sprite"></div>
        <div>The Pokemon you searched is {capitalise(pokeName)}</div>
        <div>
            <p>And looks like:</p><img src={`${pokeSprite}`}></img>
        </div>
        <button onClick={() => setPokeNum(randomNum)}>Pick random Pokemon</button>
        <input type="text" id="pokeSearch"></input>
        <button onClick={getInput}>Search</button>
    </>
  )
}

export default PokeAPI