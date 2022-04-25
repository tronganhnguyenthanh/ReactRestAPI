// Import dotenv library
require("dotenv").config()
// Import express library
const express = require("express")
// Import mongoose library
const mongoose = require("mongoose")
// Connect MongoDB Database
mongoose.connect(process.env.Node_API_URL).then(() => {
 console.log("Database connected")
})
// Use express
const app = express()
// Define port
let PORT = 8888
// Enable XMLHTTPRequet in Browser
const cors = require("cors")
const router = require("./routes/ChatRoutes")
// Parse json object
app.use(express.json())
// Use cors
app.use(cors())
// Listening on port 8888
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
// API route
app.use("/api", router)