const mongoose = require('mongoose');

const GoalModel = new mongoose.Schema({
    "name" : String,
    "cost" : Number,
    "saved": Number,
    "rest" : Number
})

module.exports = mongoose.model("Goal", GoalModel);