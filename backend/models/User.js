const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    "name" : String,
    "email" : String,
    "password" : String,
    "role" : {type: String, default: "user"},
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

UserModel.set("toJSON", {
    transform : (doc, ret)=>{
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.__v

    }
})

module.exports = mongoose.model("User", UserModel);
