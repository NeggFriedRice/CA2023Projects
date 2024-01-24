import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// Copy connection string from MongoDB -> Connect page
mongoose.connect(process.env.DB_URI)
    .then((conn) => console.log(conn.connection.readyState === 1 ? 'MongoDB connected!' : 'MongoDB failed to connect'))
    .catch((err) => console.log(err))

process.on('SIGTERM', () => mongoose.disconnect())

const entriesSchema = new mongoose.Schema({
    category: { type: String, required: true},
    content: { type: String, required: true}
})

const EntryModel = mongoose.model('Entry', entriesSchema)

export { EntryModel }