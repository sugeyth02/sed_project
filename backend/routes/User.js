const router = require("express").Router();
const user = require("../controllers/User");
const validatorGoal = require("../validators/Goal");
const validatorDailyLog = require("../validators/DailyLog");
const middleware = require("../middlewares/Middleware");

router.get("/validateToken", middleware.verifyToken, user.verifyToken);
router.post(
  "/Goals",
  middleware.verifyToken,
  validatorGoal.createGoal,
  user.addGoals
);
router.post(
  "/DailyLog",
  middleware.verifyToken,
  validatorDailyLog.createDailyLog,
  user.addDailyLog
);
router.get("/getGoals", middleware.verifyToken, user.getGoals);

module.exports = router;
