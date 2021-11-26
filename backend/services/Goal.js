const Goalrepository = require("../repositories/Goal");

const GoalService = {
  createGoal: async (name, cost) => {
    try {
      return await Goalrepository.save(name, cost);
    } catch (e) {
      throw e;
    }
  },
  updateLatest: async (id, saved) => {
    try {
      let bonus = 0;
      let state = false;
      const latest = await Goalrepository.get(id);
      console.log(latest, saved);
      latest.saved += saved;
      latest.rest = latest.cost - latest.saved;
      if (latest.rest <= 0) {
        latest.active = false;
        bonus = latest.rest;
        latest.rest = 0;
        state = true;
      }
      await latest.save();
      return { state, rest: Math.abs(bonus) };
    } catch (e) {
      throw e;
    }
  },
};

module.exports = GoalService;
