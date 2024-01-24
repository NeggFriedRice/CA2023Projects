const express = require('express');
const { body, validationResult} = require('express-validator')

// Create the server instance.
const app = express();
// Configure the server instance to receive JSON data.
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Custom validator
app.use((request, response, next) => {
    let importantInfo = {
        url: request.originalUrl,
        verb: request.method,
        ip: request.ip
    }
    console.log(importantInfo)
    next()
})



const baseURL = "https://pokeapi.co/api/v2/pokemon/";

// localhost:3000
app.post('/', 
    body('pokemonName').trim().escape().not().isEmpty().isLength({min: 2}).withMessage("Pokemon name must be at least 2 characters long and not empty!"),
    async (request, response) => {
    const errors = validationResult(request)
    const errorsArray = errors.array()
    for (let i = 0; i < errorsArray.length; i++) {
        console.log(errorsArray[i].msg)
    }

    if (!errors.isEmpty()) {
        return response.status(400).json({errors: errors.array()})
    } else {
        // If this fetch request returns JSON, then we want to store it as an object that we can work with.
        // let result = await fetch(baseURL + request.body.pokemonName).then((data) => {return data.json()});
        let result = await fetch(baseURL + request.body.pokemonName)
        .then((data) => {
            if (data.statusText == "Not Found") {
                throw new Error("Pokemon not found")
                
            } else {
                return data.json()
            }
        })
        .then((result => {response.json({
            pokedexNumber: result.id,
            name: result.name
            })}
        ))
        .catch((error) => {response.json({error: error.message})})
    }



})     



// Activate the server at port 3000.
app.listen(3000, () => {
    console.log("Server running!");
});