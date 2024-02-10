// Import express
import express from 'express'

// Create instance of express
const app = express()
// Choose port to run on
const port = 4002

app.get('/', (req, res) => {
  res.send({
    message: "Hello there!"})
})

app.listen(port, () => {
  console.log("Now listening on port " + port)
})
