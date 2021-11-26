const DailyLogRepository = require("./../repositories/DailyLog");
const GoalRepository = require("./../repositories/Goal");
const UserRepository = require("./../repositories/User");
const AdminController = {
  getTotalSaved: async (req, res) => {
    try {
      const response = await DailyLogRepository.getAll();
      res.status(201).json({
        status: response,
      });
    } catch (e) {
      res.status(400).json({
        status: e.message,
      });
    }
  },
  getGoalTotalState: async (req, res) => {
    try {
      const response = await GoalRepository.getAll();
      res.status(201).json({
        status: response,
      });
    } catch (e) {
      res.status(400).json({
        status: e.message,
      });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const response = await UserRepository.findAll();
      res.status(201).json({
        status: response,
      });
    } catch (e) {
      res.status(400).json({
        status: e.message,
      });
    }
  },
};

module.exports = AdminController;
