const mongoose = require("mongoose");

const DailyLogModel = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  spent: Number,
  saved: Number,
});

DailyLogModel.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model("DailyLog", DailyLogModel);
