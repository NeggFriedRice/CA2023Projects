const mongoose = require('mongoose');

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

async function someAppFunction(){
    await dbConnect();
    console.log("Closing the DB now so the app doesn't hang open for ages...");
    await dbClose();
}

someAppFunction();

const Developer = mongoose.model('Developer', {
    name: String,
    skills: [String]
})