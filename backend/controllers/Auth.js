const UserRepository = require("../repositories/User");
const jwt = require("jsonwebtoken");

const AuthController = {
  singup: (req, res) => {
    const { name, email, password } = req.validUser;
    UserRepository.findEmail(email)
      .then((response) => {
        if (response) throw new Error("Usuario existente");

        UserRepository.save(name, email, password).then((response) =>
          res.status(201).json({
            status: response,
          })
        );
      })
      .catch((e) =>
        res.status(400).json({
          status: e.message,
        })
      );
  },
  login: async (req, res) => {
    const { email, password } = req.validUser;
    try {
      const response = await UserRepository.findEmail(email);
      if(!response){
        throw new Error("Credenciales incorrectas");
      }
      if(! await UserRepository.comparePwd(response.password, password)){
        throw new Error("Credenciales incorrectas");
      }
      
      res.status(200).json({
        token: jwt.sign({email: response.email}, process.env.JWT_KEY,{
            expiresIn : 86400
        } ),
      })
    } catch (e) {
      res.status(401).json({
        status: e.message,
      });
    }
  },
};

module.exports = AuthController;
