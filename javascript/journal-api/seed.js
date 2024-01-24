import { EntryModel, closeConnection } from './db.js'

const entries = [
    { category: "Food", content: "Pizza is yummy!" },
    { category: "Coding", content: "Coding is fun!" },
    { category: "Gaming", content: "Skyrim is for the Nords!" },
]

await EntryModel.deleteMany()
console.log('Deleted entries')
await EntryModel.insertMany(entries)
console.log('Added entries')

closeConnection()