const utilityToken = require("../utilities/token");
const repository = require("../repositories/User");

const Middleware = {
  //validar token
  verifyToken: async (req, res, next) => {
    try {
      const token = req.get("Authorization");
      if (!token || !token.startsWith("Bearer")) {
        return res.status(401).json({
          status: "No autorizado",
        });
      }
      const tokenprovided = token.split(" ")[1];
      const decryptToken = utilityToken.decryptToken(
        tokenprovided,
        process.env.JWT_KEY,
        { ignoredExpiration: false }
      );
      const user = await repository.findEmail(decryptToken.email);
      if (!user)
        return res.status(401).json({
          status: "No autorizado",
        });
      req.user = user;
      next();
    } catch (e) {
      res.status(401).json({
        status: "No autorizado",
      });
    }
  },

  verifyRole: async (req, res, next, role) => {
    const userRole = req.user.role;
    if (userRole === role) {
      next();
    } else {
      res.status(401).json({
        status: "No autorizado",
      });
    }
  },
};

module.exports = Middleware;
