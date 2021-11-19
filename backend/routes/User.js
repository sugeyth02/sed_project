const router = require("express").Router();
const user = require("../controllers/User");
const middleware = require("../middlewares/Middleware");

router.get("/validateToken", middleware.verifyToken, user.verifyToken);

module.exports = router;
