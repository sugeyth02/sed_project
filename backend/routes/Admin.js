const router = require("express").Router();
const middleware = require("../middlewares/Middleware");
const admin = require("../controllers/Admin");

router.get("/getSaved", middleware.verifyToken, admin.getTotalSaved);
router.get("/getGoalsState", middleware.verifyToken, admin.getGoalTotalState);
router.get("/getUsers", middleware.verifyToken, admin.getAllUsers);

module.exports = router;
