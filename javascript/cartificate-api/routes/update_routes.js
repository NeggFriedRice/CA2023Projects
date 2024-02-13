import express from 'express'
import { UpdateModel } from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await UpdateModel.find())
})

export default router