const GoalModel = require("../models/Goal");
const moongose = require("mongoose");

const GoalRepository = {
  save: async (name, cost) => {
    const goal = new GoalModel({
      name: name,
      cost: cost,
      rest: cost,
    });
    return goal.save();
  },
  get: async (id) => {
    id = new moongose.Types.ObjectId(id);
    const goal = await GoalModel.findById(id);
    return goal;
  },
  getAll: async () => {
    const goals = await GoalModel.find({});
    let contActive = 0,
      contNoactive = 0;
    goals.map((goal) => {
      if (goal.active) contNoactive++;
      else contActive++;
    });
    return { active: contActive, noactive: contNoactive };
  },
};

module.exports = GoalRepository;
