import { Developer } from './db.js'
import mongoose from 'mongoose'

async function dbClose(){
    await mongoose.disconnect();
    console.log("Database disconnected!");
}

async function someAppFunction(){

    let newDev = new Developer ({
        name: "MATTHEW",
        skills: ["WHY IS THIS WORKING AGAIN??!"]
    })

    let newDev2 = new Developer ({
        name: "Jason",
        skills: ["Eating", "Gaming"]
    })

    await Developer.create([newDev, newDev2])
    .catch(error => console.log("There was an issue saving the data!" + error))

    await Developer.create({
        name: "Timmy",
        skills: ["Python", "Java", "C++"]
    })
    .catch(error => console.log("There was an issue saving the data! " + error))
    console.log("Successfully saved")
    dbClose()
}


someAppFunction();
