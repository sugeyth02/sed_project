const DailyLogrepository = require("../repositories/DailyLog");

const DailyLogService = {
  createDailyLog: async (spent, saved) => {
    try {
      return await DailyLogrepository.save(spent, saved);
    } catch (e) {
      throw e;
    }
  },
};

module.exports = DailyLogService;
