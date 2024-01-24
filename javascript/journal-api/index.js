import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const categories = ['Food', 'Gaming', 'Coding', 'Other']

const entries = [
    { category: "Food", content: "Pizza is yummy!" },
    { category: "Coding", content: "Coding is fun!" },
    { category: "Gaming", content: "Skyrim is for the Nords!" },
]
// Copy connection string from MongoDB -> Connect page
mongoose.connect(process.env.DB_URI)
    .then((conn) => console.log(conn.connection.readyState === 1 ? 'MongoDB connected!' : 'MongoDB failed to connect'))
    .catch((err) => console.log(err))

process.on('SIGTERM', () => mongoose.disconnect())

const entriesSchema = new mongoose.Schema({
    category: { type: String, required: true},
    content: { type: String, required: true}
})

const EntryModel = mongoose.model('Entry', entriesSchema)

const app = express()

app.use(express.json())



// Get request will return req and res which can be used in callbacks
app.get('/', (req, res) => res.send({ info: "Journal API" }))

app.get('/categories', (req, res) => res.status(200).send(categories))

app.get('/entries', async (req, res) => res.status(200).send(await EntryModel.find()))
app.get('/entries/:id', (req, res) => {
    const entry = entries[req.params.id - 1]
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

 app.listen(4001)



