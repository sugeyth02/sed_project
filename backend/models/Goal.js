const mongoose = require("mongoose");

const GoalModel = new mongoose.Schema({
  name: String,
  cost: Number,
  active: { type: Boolean, default: true },
  saved: { type: Number, default: 0.0 },
  rest: { type: Number },
});

GoalModel.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model("Goal", GoalModel);
