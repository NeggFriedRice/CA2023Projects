import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// Copy connection string from MongoDB -> Connect page
try {
    const conn = await mongoose.connect(process.env.DB_URI)
    console.log(conn.connection.readyState === 1 ? 'MongoDB connected!' : 'MongoDB failed to connect')
}
catch (err) {
    console.log(err)
}

const closeConnection = () => { 
    console.log('Mongoose disconnecting...')
    mongoose.disconnect()
}

process.on('SIGINT', () => {
    console.log('Mongoose disconnecting...')
    mongoose.disconnect()
})


const entriesSchema = new mongoose.Schema({
    category: { type: mongoose.ObjectId, ref: "Category"},
    content: { type: String, required: true}
})

const EntryModel = mongoose.model('Entry', entriesSchema)

const categoriesSchema = new mongoose.Schema({
    name: { type: String, required: true},
    entries: [entriesSchema]
})

const CategoryModel = mongoose.model('Category', categoriesSchema)


export { closeConnection, EntryModel, CategoryModel }