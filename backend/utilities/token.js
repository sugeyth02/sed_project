const jwt = require("jsonwebtoken");
const Token = {
  createToken: (data, key) => jwt.sign(data, key, {
      expiresIn: 86400,
    }),
  decryptToken: (data, key, options) => jwt.verify(data, key, options)
};
module.exports = Token;
