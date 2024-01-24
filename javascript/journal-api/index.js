import express from 'express'
import { EntryModel, CategoryModel } from './db.js'

const categories = ['Food', 'Gaming', 'Coding', 'Other']

const app = express()

app.use(express.json())


// Get request will return req and res which can be used in callbacks
app.get('/', (req, res) => res.send({ info: "Journal API" }))

app.get('/categories', async (req, res) => res.status(200).send(await CategoryModel.find()))

app.get('/entries', async (req, res) => res.status(200).send(await EntryModel.find()))
app.get('/entries/:id', async (req, res) => {
    const entry = await EntryModel.findById(req.params.id)
    if (entry) {
        res.status(200).send(entry)
    } else {
        res.status(400).send({error: "Entry not found"})
    }
    
})

app.post('/entries', async (req, res) => {
    try {
        // Get entry data from the request
        console.log(req.body)
        // TODO: Validate the incoming data
        // Create a new entry object
        // Push the new entry to the array
        // entries.push(req.body)
        const insertedEntry = await EntryModel.create(req.body)
        // Respond with 201 status code and the created entry
        res.status(201).send(insertedEntry)
    }
    catch (err) {
        res.status(400).send({ error: err.message })
    }

})

app.put('/entries/:id', async (req, res) => {
    try {
        const updatedEntry = await EntryModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (updatedEntry) {
        // Respond with 200 status code (default so not needed under status())
        res.send(updatedEntry)
    } else {
        res.status(404).send({error: err.message})
    }
        }

    catch (err) {
        res.status(400).send({ error: err.message })
    }

})

app.delete('/entries/:id', async (req, res) => {
    try {
        const deletedEntry = await EntryModel.findByIdAndDelete(req.params.id)
        if (deletedEntry) {
        // Respond with 204 status code for deletion. Nothing to respond with, hence blank
        res.sendStatus(204)
    } else {
        res.status(404).send({error: "Entry not found"})
    }
        }
    catch (err) {
        res.status(400).send({ error: err.message })
    }

})

 app.listen(4001)



