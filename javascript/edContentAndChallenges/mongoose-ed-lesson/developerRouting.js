import express from 'express'
import { createDev, getAllDevs, updateDevById, deleteDevById } from './developerFunctions.js'

const router = express.Router()

// Get all devs
router.get("/", async (req, res) => {
    let listOfDevs = []

    // Call the get all devs function
    listOfDevs = await getAllDevs()
    
    res.send({
        developers: listOfDevs
    })
})

// Create new dev
router.post("/", async (req, res) => {
    let newDev = null

    // Call the create function here
    newDev = await createDev(req.body.name, req.body.skills)

    res.json({
        developer: newDev
    })
})

// Update a dev
router.put("/", async (req, res) => {
    let targetDev = null
    
    // We have logic to leave the data if nothing is sent in the body
    let updatedName = req.body.name || null
    let updatedSkills = req.body.skills || null

    // Call the update function here
    targetDev = await updateDevById(req.body.id, updatedName, updatedSkills)

    res.json({
        updatedDeveloper: targetDev
    })
})

// Delete a dev
router.delete("/", async (req, res) => {
    let deletedDev = null

    // Call the delete function here
    deletedDev = await deleteDevById(req.body.id)

    res.json({
        deletedDeveloper: deletedDev
    })
})

export default router