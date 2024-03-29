// import { Developer } from './db.js'
import express from 'express'
import mongoose from 'mongoose'
import router from './developerRouting.js'

const app = express()

app.use(express.json())
app.use('/developers', router)

// app.get('/', (req, res) => res.send( {info: "Mongoose Ed Content"}))

// app.get('/developers', async (req, res) => res.status(200).send(await Developer.find()))

// app.get('/developers/findone', async (req, res) => res.status(200).send(await Developer.findOne().exec()))

// app.get('/developers/name/:devName', async (req, res) => res.status(200).send(await Developer.find({name: req.params.devName})))

// app.put('/developers/update/:devName', async (req, res) => {
//     let foundDev = await Developer.findOne({name: req.params.devName})
//     foundDev.skills.push("Ruby red this is an update")
//     let updatedDev = await foundDev.save()
//     res.status(200).send(JSON.stringify(updatedDev))
// })

// app.delete('/developers/delete/:devName', async (req, res) => {
//     await Developer.deleteOne({name: req.params.devName})
//     res.send({"message": `Entry Deleted ${req.params.devName}`})
// })

// app.get('/developers/skills/:lang', async (req, res) => res.status(200).send(await Developer.find({skills: { $elemMatch: {$eq: req.params.lang}}})))

app.get("/databaseHealth", (request, response) => {
    let databaseState = mongoose.connection.readyState;
    let databaseName = mongoose.connection.name;
    let databaseModels = mongoose.connection.modelNames();
    let databaseHost = mongoose.connection.host;

    response.json({
        readyState: databaseState,
        dbName: databaseName,
        dbModels: databaseModels,
        dbHost: databaseHost
    })
});

app.listen(4001, (req, res) => {
    console.log("App is running on port 4001")
})