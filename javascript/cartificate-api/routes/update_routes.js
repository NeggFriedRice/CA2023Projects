import express from 'express'
import { UpdateModel } from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await UpdateModel.find())
})

router.post('/new', async (req, res) => {
  try {
    const newUpdate = await (await UpdateModel.create(req.body))
    res.status(201).send(newUpdate)
  } catch (error) {
    console.log(e)
  }
})

export default router