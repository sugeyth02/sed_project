const UserModel = require("../models/User");
const Encryption = require("../utilities/hashed");

const UserRepository = {
  save: async (name, email, password) => {
    const pwd = await Encryption.hash(password);
    const user = new UserModel({
      name: name,
      email: email,
      password: pwd,
      goal: [],
      dailyLog: [],
    });
    return user.save();
  },
  findEmail: async (email) => {
    const user = await UserModel.findOne({
      email: email,
    }).populate({
      path: "goal",
      select: "_id active",
    });
    return user;
  },
  findAll: async () => {
    const users = await UserModel.find({})
      .populate({
        path: "goal",
        select: "active -_id",
      })
      .populate({
        path: "dailyLog",
        select: "saved -_id",
      });

    return users.map((user) => {
      return {
        name: user.name,
        activeGoals: user.goal.filter((goal) => goal.active === false).length,
        inactiveGoals: user.goal.filter((goal) => goal.active === true).length,
        saved: user.dailyLog.reduce((prev, act) => prev + act.saved, 0),
      };
    });
  },
  getGoals: async (email) => {
    const user = await UserModel.findOne({
      email: email,
    }).populate({
      path: "goal",
      select: "name cost saved active rest -_id",
    });
    return user.goal.filter((goal) => {
      return goal.active;
    });
  },
  comparePwd: async (hashedPwd, pwd) => {
    return await Encryption.compare(hashedPwd, pwd);
  },
};

module.exports = UserRepository;
