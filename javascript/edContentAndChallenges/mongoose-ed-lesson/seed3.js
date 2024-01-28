// This seed3 file follows:
// ED CONTENT: Sub documents (https://edstem.org/au/courses/13831/lessons/41815/slides/288631)

import { Developer, Company } from './db.js'
import mongoose from 'mongoose'

async function dbConnect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/CoderIsAwesome');
        console.log("Database connected!");
    } catch (error) {
        console.log(`dbConnect failed! Error:\n${JSON.stringify(error)}`);
    }
}

async function dbClose(){
    await mongoose.connection.close();
    console.log("Database disconnected!");
}

async function dbWipe(){
    console.log('Emptying out the database...');
    await mongoose.connection.db.dropDatabase();
    console.log("Database is now empty!");
}

async function someAppFunction(){
    await dbConnect();

    await dbWipe();
    
    // Create a document instance
    let newCoderCompany = new Company({
        name:"Coder Academy",
        employees: [
            {
                name: "Alex",
                skills: ["HTML", "CSS", "JavaScript"]
            },
            {
                name: "Jairo",
                age: 32
            }
        ]
    })

    await newCoderCompany.save().then(() => {
        console.log("Company save successful!");
    }).catch(error => {
        console.log("Some error occurred saving data!:\n" + error)
    });

    // console.log(JSON.stringify(newCoderCompany, null, 4));

    console.log("Closing the DB now so the app doesn't hang open for ages...");
    await dbClose();
}

someAppFunction()

// async function queryDB() {
//     let companyThatEmploysAlex = await Company.findOne({"employees.name": "Alex"}).exec()
//     console.log("Alex works at: " + companyThatEmploysAlex.name)
// }


queryDB()

