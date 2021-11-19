const utilityToken = require("../utilities/token");
const repository = require("../repositories/User");

const UserController = {
  verifyToken: async (req, res) => {
    res.status(200).json({
      role: req.user.role,
      email: req.user.email,
      name: req.user.name,
    });
  },
};

module.exports = UserController;
