import express from 'express'

const categories = ['Food', 'Gaming', 'Coding', 'Other']

const entries = [
    { category: "Food", content: "Pizza is yummy!" },
    { category: "Coding", content: "Coding is fun!" },
    { category: "Gaming", content: "Skyrim is for the Nords!" },
]

const app = express()

app.use(express.json())

// Get request will return req and res which can be used in callbacks
app.get('/', (req, res) => res.send({ info: "Journal API" }))

app.get('/categories', (req, res) => res.status(200).send(categories))

app.get('/entries', (req, res) => res.status(200).send(entries))
app.get('/entries/:id', (req, res) => {
    const entry = entries[req.params.id - 1]
    if (entry) {
        res.status(200).send(entry)
    } else {
        res.status(400).send({error: "Entry not found"})
    }
    
})

app.post('/entries', (req, res) => {
    // Get entry data from the request
    console.log(req.body)
    // TODO: Validate the incoming data
    // Create a new entry object
    // Push the new entry to the array
    entries.push(req.body)
    // Respond with 201 status code and the created entry
    res.status(201).send(entries[entries.length -1])
})

 app.listen(4001)



