const mongoose = require('mongoose');

const DailyLogModel = new mongoose.Schema({
    "date" : Date,
    "spent": Number,
    "saved" : Number
})

module.exports = mongoose.model("DailyLog", DailyLogModel);