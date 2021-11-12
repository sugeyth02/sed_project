const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    "name" : String,
    "email" : String,
    "password" : String,
    "goal": [{
        "type": mongoose.Schema.ObjectId,
        "ref":"Goal",
        "default" : []
    }],
    "dailyLog": [{
        "type": mongoose.Schema.ObjectId,
        "ref":"DailyLog",
        "default" : []
    }],

})

module.exports = mongoose.model("User", UserModel);