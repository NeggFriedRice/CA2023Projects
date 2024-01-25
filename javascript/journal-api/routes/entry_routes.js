import { Router } from 'express'
import { EntryModel } from '../db.js'

const router = Router()

router.get('/', async (req, res) => res.send(await EntryModel.find().populate('category')))

router.get('/:id', async (req, res) => {
    const entry = await EntryModel.findById(req.params.id).populate('category')
    if (entry) {
        res.status(200).send(entry)
        // PRACTICE: Playing around with getting attributes from entry object
        // res.status(200).send({
        //     entryId: entry._id,
        //     categoryId: entry.category._id,
        //     categoryName: entry.category.name
        // })
    } else {
        res.status(400).send({error: "Entry not found"})
    }    
})

router.post('/', async (req, res) => {
    try {
        // const cat = await CategoryModel.findOne({ name: req.body.category })
        const insertedEntry = await EntryModel.create(req.body)
        res.status(201).send(insertedEntry)
    }
    catch (err) {
        res.status(400).send({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
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

router.delete('/entries/:id', async (req, res) => {
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

export default router