const mongoose = require("mongoose")

const taskSchema = mongoose.Schema(
    {
        lecture: {
            type: String,
            required: [true, "Please add a task"]
        },
        type: {
            type: String,
        },
        detail: {
            type: String,
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        },
        year: {
            type: Number,
        },
        month: {
            type: Number,
        },
        day: {
            type: Number,
        },
        hour: {
            type: Number,
        },
        minute: {
            type: Number,
        },
        second: {
            type: Number,
        }
    },
    {
        timestamps: true
    }
)

const Task = mongoose.model("Task", taskSchema)

module.exports = Task