// This seed2 file follows:
// ED CONTENT: Document Referencing (https://edstem.org/au/courses/13831/lessons/41815/slides/288629)

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
    let newAlexDev = new Developer({
        name:"Alex",
        skills:["HTML", "CSS", "JavaScript"]
    });

    // Save the document to the database
    await newAlexDev.save().then(() => {
        console.log("Alex save successful!");
    }).catch(error => {
        console.log("Some error occurred saving data!:\n" + error)
    });

    // Create a document instance
    let newJairoDev = new Developer({
        name:"Jairo",
        skills:["HTML", "CSS", "JavaScript"]
    });

    // Save the document to the database
    await newJairoDev.save().then(() => {
        console.log("Jairo save successful!");
    }).catch(error => {
        console.log("Some error occurred saving data!:\n" + error)
    });

    // Create a document instance
    let newCoderCompany = new Company({
        name:"Coder Academy",
        // Use other document instances' data to fill data in the company
        // Note that _id must be forced as a string via toString()
        // otherwise it can behave inconsistently (eg. it can be an object)
        employees: [newAlexDev._id, newJairoDev._id]
    })

    // Check what data we ended up with in the company regarding employees:
    console.log("Company has employees: " + newCoderCompany.employees);

    // Save the document to the database
    await newCoderCompany.save().then(() => {
        console.log("Company save successful!");
    }).catch(error => {
        console.log("Some error occurred saving data!:\n" + error)
    });

    let retrievedCompany = await Company.findOne({name: "Coder Academy"}).populate("employees").exec()
    // Work with referenced data
    let companyEmployeeMessage = "Company has employees: ";

    // Not all loops work well with async/await functions
    // for...of loops work great!
    for (const dev of retrievedCompany.employees) {
        console.log(`${dev.name} works at ${newCoderCompany.name}!`);
        companyEmployeeMessage += dev.name + ", ";
    }
    console.log(companyEmployeeMessage);
    console.log("---");
    console.log(JSON.stringify(newCoderCompany, null, 4));
    console.log("---");
    console.log(JSON.stringify(retrievedCompany, null, 4));
    console.log("---");


    console.log("Closing the DB now so the app doesn't hang open for ages...");
    await dbClose();
}

someAppFunction();