const router = require("express").Router();
const auth = require("../controllers/Auth");
const validator = require("../validators/User");
const middleware = require("../middlewares/Middleware");

router.post("/singUp", validator.singUp, auth.singup);
router.post("/logIn", validator.login, auth.login);

/* router.post("/peterParker", middleware.verifyToken, (req, res, next) => {
  middleware.verifyRole(req, res, next, "admin");
}); */

module.exports = router;
