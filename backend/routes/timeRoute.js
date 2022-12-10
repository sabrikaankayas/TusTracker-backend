const express = require("express")

const {createTime, getTimes, updateTime, getBackupTimes, getFilteredTimes} = require("../controllers/timeController")

const router = express.Router()

router.route("/").post(createTime).get(getTimes)
router.route("/:id").put(updateTime)
router.route("/backUp").get(getFilteredTimes)



module.exports = router