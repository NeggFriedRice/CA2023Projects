import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

try {
    const conn = await mongoose.connect(process.env.DB_URI)
    console.log(conn.connection.readyState)
    console.log(conn.connection.readyState === 1 ? 'MongoDB connected!' : 'MongoDB failed to connect')
}

catch (err) {
    console.log(err) 
}


const closeConnection = () => { 
    console.log('Mongoose disconnecting...')
    mongoose.disconnect()
    process.exit()
}

const developersSchema = new mongoose.Schema({
    name: { type: String },
    skills: { type: [String] }
})

// Developer model (using mongoose)
const Developer = mongoose.model('Developer', developersSchema)

export { Developer }