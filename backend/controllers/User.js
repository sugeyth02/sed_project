const UserService = require("../services/User");
const GoalService = require("../services/Goal");
const UserRepository = require("../repositories/User");

const UserController = {
  verifyToken: async (req, res) => {
    res.status(200).json({
      role: req.user.role,
      email: req.user.email,
      name: req.user.name,
    });
  },
  addGoals: async (req, res) => {
    try {
      const { name, cost } = req.validGoal;
      const response = await UserService.addGoal(name, cost, req.user);
      res.status(201).json({
        status: response,
      });
    } catch (e) {
      res.status(400).json({
        status: e.message,
      });
    }
  },
  addDailyLog: async (req, res) => {
    try {
      let { spent, saved } = req.validDailyLog;
      const activeGoals = req.user.goal.filter((goal) => {
        return goal.active;
      });
      if (activeGoals.length === 0) {
        return res.status(422).json({
          status: "no hay metas",
        });
      }

      let state = true;
      let index = 0;

      while (state) {
        const { state: _state, rest } = await GoalService.updateLatest(
          activeGoals[index]._id,
          saved
        );
        saved = rest;
        state = _state;
        if (state) {
          index++;
        } else if (index > activeGoals.length) {
          return res.status(422).json({
            status: "no hay metas",
          });
        }
      }

      const response = await UserService.addDailyLog(spent, saved, req.user);
      res.status(201).json({
        status: response,
      });
    } catch (e) {
      res.status(400).json({
        status: e.message,
      });
    }
  },
  getGoals: async (req, res) => {
    try {
      const response = await UserRepository.getGoals(req.user.email);
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

module.exports = UserController;
