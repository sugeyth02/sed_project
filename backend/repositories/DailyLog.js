const DailyLogModel = require("../models/DailyLog");

const DailyLogRepository = {
  save: async (spent, saved) => {
    const dailyLog = new DailyLogModel({
      spent: spent,
      saved: saved,
    });
    return dailyLog.save();
  },
  getAll: async () => {
    const dailyLog = await DailyLogModel.find({});
    let saved = 0;
    dailyLog.map((report) => {
      saved += report.saved;
    });
    return { totalSaved: saved };
  },
};

module.exports = DailyLogRepository;
