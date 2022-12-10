const mongoose = require("mongoose")

const timeSchema = mongoose.Schema(
    {
        totalTime: {
            type: Number,
        },
        minute: {
            type: Number
        }
    },
    {
        timestamps: true
    }
)

const BackupTime = mongoose.model("backupTimes", timeSchema)

module.exports = BackupTime