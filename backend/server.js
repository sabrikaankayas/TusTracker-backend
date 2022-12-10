const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const timeRoutes = require("./routes/timeRoute")
const taskRoutes = require("./routes/taskRoute")

const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(
    {origin: ["http://localhost:3000", "https://airelsbuddy.onrender.com"]
}))
app.use("/api/times", timeRoutes)
app.use("/api/tasks", taskRoutes)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))

