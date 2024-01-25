import express from 'express'
import { CategoryModel } from './db.js'
import entryRoutes from './routes/entry_routes.js'

const app = express()

app.use(express.json())

// Get request will return req and res which can be used in callbacks
app.get('/', (req, res) => res.send({ info: "Journal API" }))

// TOD: Move /categories into routes folder
// TODO: Complete categories CRUD
// TODO: ADVANCE: Modify "GET /categories/:id" to embed an array of all the entries in that category

app.get('/categories', async (req, res) => res.status(200).send(await CategoryModel.find()))

app.use('/entries', entryRoutes)

app.listen(4001)



