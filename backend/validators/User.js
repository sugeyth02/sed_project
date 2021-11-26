const Joi = require("joi");

const UserValidator = {
  singUp: async (req, res, next) => {
    try {
      const schema = Joi.object({
        name: Joi.string()
          .min(3)
          .max(30)
          .regex(/^\s*\w+(?:[^\w,]+\w+)*[^,\w]*$/)
          .required(), //add spaces
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required(),
        password: Joi.string().required(),
        //Minimum eight characters, at least
        //one uppercase letter, one lowercase letter, one number and one special character
        /*.pattern(
            new RegExp(
              "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
            )
          ),*/
      });

      const validUser = await schema.validateAsync(req.body);
      req.validUser = validUser;
      next();
    } catch (e) {
      return res.status(400).json({
        status: e.message,
      });
    }
  },
  login: async (req, res, next) => {
    try {
      const schema = Joi.object({
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required(),
        password: Joi.string().required(),
      });

      const validUser = await schema.validateAsync(req.body);
      req.validUser = validUser;
      next();
    } catch (e) {
      return res.status(400).json({
        status: e.message,
      });
    }
  },
};

module.exports = UserValidator;
