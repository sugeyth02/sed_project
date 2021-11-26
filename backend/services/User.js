const GoalService = require("../services/Goal");
const DailyLogService = require("../services/DailyLog");

const UserService = {
  addGoal: async (name, cost, user) => {
    try {
      const goal = await GoalService.createGoal(name, cost);
      user.goal.push(goal);
      const response = await user.save();
      return response.populate("goal");
    } catch (e) {
      throw e;
    }
  },
  addDailyLog: async (spent, saved, user) => {
    try {
      const dailyLog = await DailyLogService.createDailyLog(spent, saved);
      user.dailyLog.push(dailyLog);
      const response = await user.save();
      return response.populate("dailyLog");
    } catch (e) {
      throw e;
    }
  },
  getLatestGoal: async (user) => {
    try {
      const goal = user.goal[0];
      return goal;
    } catch (e) {
      throw e;
    }
  },
};

module.exports = UserService;
