const Joi = require("joi");

const GoalValidator = {
  createGoal: async (req, res, next) => {
    try {
      const schema = Joi.object({
        name: Joi.string()
          .min(3)
          .max(30)
          .regex(/^\s*\w+(?:[^\w,]+\w+)*[^,\w]*$/)
          .required(),
        cost: Joi.number().positive().required(),
      });

      console.log(req.body);
      const validGoal = await schema.validateAsync(req.body);
      req.validGoal = validGoal;
      next();
    } catch (e) {
      return res.status(400).json({
        status: e.message,
      });
    }
  },
};

module.exports = GoalValidator;
