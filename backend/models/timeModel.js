const mongoose = require("mongoose")

const timeSchema = mongoose.Schema(
    {
        totalTime: {
            type: Number,
            required: [true]
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

const Time = mongoose.model("Time", timeSchema)

module.exports = Time