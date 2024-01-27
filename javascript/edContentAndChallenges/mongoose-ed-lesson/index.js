import { Developer } from './db.js'
import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send( {info: "Mongoose Ed Content"}))

app.get('/developers', async (req, res) => res.status(200).send(await Developer.find()))

app.get('/developers/:devName', async (req, res) => res.status(200).send(await Developer.find({name: req.params.devName})))

app.listen(4001, (req, res) => {
    console.log("App is running on port 4001")
})