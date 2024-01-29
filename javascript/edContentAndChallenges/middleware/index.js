const express = require('express');
const { body, validationResult } = require('express-validator');

// Create the server instance.
const app = express();

// Configure the server instance to receive JSON data.
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Configure middleware for the file's server instance

// No route specified for middleware but mounted to the instance
// means that this will run on ALL web requests.
app.use((request, response, next) => {
    let importantRequestInfo = {
        url: request.originalUrl,
        params: request.params,
        verb: request.method,
        host: request.hostname,
        ip: request.ip,
    };
    console.log("Request received:\n" + JSON.stringify(importantRequestInfo, null, 4));
    next();
});

// This middleware runs on a specific route, not all routes.
app.use('/users/register', (request, response, next) => {
    // This could be its own middleware that runs on every route.
    // Just making sure we can do things like request.body.errors.push("some error")
    if (!request.body.errors) {
        request.body.errors = [];
    }

    request.body.email = request.body.email.toLowerCase();
    if (request.body.username){
        // Never seen these string methods? Check the docs!
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
        request.body.username = request.body.username.normalize();
        request.body.username = request.body.username.trim();

        if (request.body.username.length < 3){

            request.body.errors.push("Username too short");
        } 
    } else {
        request.body.errors.push("Username missing");
    }

    if (request.body.password){
        request.body.password = request.body.password.normalize();
        request.body.password = request.body.password.trim();

        if (request.body.password.length < 3){

            request.body.errors.push("Password too short");
        } 
    } else {
        request.body.errors.push("Password missing");
    }

    if (request.body.errors.length > 0){
        next(new Error(JSON.stringify(request.body.errors)))
    } else {
        next()
    }
    console.log("User register route detected!");
    
});

// This runs if any middleware or route above it passes an Error instance to next
// eg. next(new Error("error message text here"))
app.use((error, request, response, next) => {
    response.json({
        errors: request.body.errors
    })
})

// Middleware should be written before any routes that need to use it are written.
// Remember, JS executes a code file from top to bottom! 

// Create routes for the server instance to respond to.

// localhost:3000
app.get('/', (request, response) => {
    response.send("Hello world!");
});

// localhost:3000/users/register
app.post('/users/register', (request, response) => {

    let newUserEmail = request.body.email;
    let newUserPass = request.body.password;
    let newUsername = request.body.username;

    // Imaginary stuff where we create users in a database.
    // We return a successfully-created user object as a response.

    response.json({
        email: newUserEmail,
        password: newUserPass,
        username: newUsername
    });

});

// localhost:3000/users/register-fancy
app.post('/users/register-fancy', 
    body('email').isEmail().normalizeEmail(),
    body('password').trim().escape().isLength({min: 8}),
    body('username').trim().escape().isLength({min: 3}),
    (request, response) => {
    // Get any results from the validation middleware
    const errors = validationResult(request);
    if (!errors.isEmpty()){
        // Using return and response together stops the rest of the route
        // because responding twice would cause a server error.
        return response.status(400).json({errors: errors.array()});
    }

    let newUserEmail = request.body.email;
    let newUserPass = request.body.password;
    let newUsername = request.body.username;

    // Imaginary stuff where we create users in a database.
    // We return a successfully-created user object as a response.

    response.json({
        email: newUserEmail,
        password: newUserPass,
        username: newUsername
    });

});

// Activate the server at port 3000.
app.listen(3000, () => {
    console.log("Server running!");
});