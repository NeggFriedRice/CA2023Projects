import express from 'express'
import { CategoryModel } from './db.js'
import entryRoutes from './routes/entry_routes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send({ info: 'Journal API' }))

// TODO: Move /categories to routes folder
// TODO: Complete categories CRUD
// TODO: ADVANCED: Modify "GET /categories/:id" to embed an array of all the entries in that category

app.get('/categories', async (req, res) => res.send(await CategoryModel.find()))

app.use('/entries', entryRoutes)

export default app