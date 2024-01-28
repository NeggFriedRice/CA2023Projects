import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

async function dbConnect(){
    let dbURL = 'mongodb+srv://mongoDB:mongoDBPassword@cluster0.emfklz6.mongodb.net/developers'
    try {
        switch (process.env.NODE_ENV.toLowerCase()) {
            case "prod":
            case "production":
                dbURL = "Some cloud based URL"
                break
            
            case "test":
                dbURL = dbURL + "Test"
                break

            case "dev":
            case "development":
                dbURL = dbURL
                break
        }
        await mongoose.connect();
        console.log("Database connected!");
    } catch (error) {
        console.log(`dbConnect failed! Error:\n${JSON.stringify(error)}`);
    }
}
dbConnect();

app.get("/", async (req, res) => {await response.json({message: "Hello World"})})

app.get("/databaseHealth", (request, response) => {
    let databaseState = mongoose.connection.readyState;
    let databaseName = mongoose.connection.name;
    let databaseModels = mongoose.connection.modelNames();
    let databaseHost = mongoose.connection.host;

    response.json({
        readyState: databaseState,
        dbName: databaseName,
        dbModels: databaseModels,
        dbHost: databaseHost
    })
});