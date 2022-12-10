const Time = require("../models/timeModel")
const BackupTime = require("../models/timeModel")


//Create a Time
const createTime = async(req, res) => {
    try {
        const time = await Time.create(req.body)
        res.status(200).json(time)
    }catch(error) {
        res.status(500).json({msg: error.message})
    }
}
// Get all Times
const getTimes = async (req, res) => {
    try {
        const times = await Time.find({day: new Date().getDate()}).sort({totalTime: -1})  
        res.status(200).json(times)
    }catch(error) {
        res.status(500).json({msg: error.message})
    }
}

// Get Filtered Times
const getFilteredTimes = async (req, res) => {
    try {
        const times = await Time.find()  
        res.status(200).json(times)
    }catch(error) {
        res.status(500).json({msg: error.message})
    }
}


// Get all BackupTimes
const getBackupTimes = async (req, res) => {
    try {
        const times = await BackupTime.find().sort({totalTime: -1})  
        res.status(200).json(times)
    }catch(error) {
        res.status(500).json({msg: error.message})
    }
}

//Update a Time
const updateTime = async (req, res) => {
    try {
        const {id} = req.params
        const time = await Time.findByIdAndUpdate({_id: id}, req.body, {
            new: true,
            runValidators: true,
        })
        if(!time) {
            return res.status(400).json(`NO time with id: ${id}`)
        }
        res.status(200).json(time)
    }catch(error) {
        res.status(500).json({msg: error.message})
    }
}


module.exports = {
    createTime,
    updateTime,
    getTimes,
    getFilteredTimes,
    getBackupTimes,
}