const mongoose = require('mongoose');

const GoalModel = new mongoose.Schema({
    "name" : String,
    "cost" : Number,
    "saved": Number,
    "rest" : Number
})

GoalModel.set("toJSON", {
    transform : (doc, ret)=>{
        ret.id = ret._id
        delete ret._id
        delete ret.__v

    }
})

module.exports = mongoose.model("Goal", GoalModel);