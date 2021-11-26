const Joi = require("joi");

const DailyLogValidator = {
  createDailyLog: async (req, res, next) => {
    try {
      const schema = Joi.object({
        spent: Joi.number().positive().required(),
        saved: Joi.number().positive().required(),
      });

      const validDailyLog = await schema.validateAsync(req.body);
      req.validDailyLog = validDailyLog;
      next();
    } catch (e) {
      return res.status(400).json({
        status: e.message,
      });
    }
  },
};

module.exports = DailyLogValidator;
