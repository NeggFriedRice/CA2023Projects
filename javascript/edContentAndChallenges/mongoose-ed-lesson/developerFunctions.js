import { Developer } from './db.js'

async function createDev(newName, newSkills) {
    
    // Checking if passed in name is null, if yes, add name as 'New Developer'
    // Checking if passed in skills is null, if yes, add 'Problem-solving'
    let checkName = "New Developer"
    let checkSkills = "Problem-solving"
    if (newName) {
        checkName = newName
    }
    if (newSkills) {
        checkSkills = newSkills
    }
    
    let createResult = await Developer.create({
        name: checkName,
        skills: checkSkills
    }).catch(error => {
        console.log("There was an issue saving the data! " + error)
    })
    return createResult
}

async function getAllDevs() {
    let foundDevs = await Developer.find().exec()
    return foundDevs
}

async function updateDevById(id, newName, newSkills) {
    let targetDev = await Developer.findById(id).exec()
    targetDev.name = newName || targetDev.name
    targetDev.skills = newSkills || targetDev.skills

    let updatedTargetDev = await targetDev.save()
    return updatedTargetDev
}

async function deleteDevById(id) {
    let deletedDev = await Developer.findByIdAndDelete(id).exec()
    return deletedDev
}

export { createDev, getAllDevs, updateDevById, deleteDevById }