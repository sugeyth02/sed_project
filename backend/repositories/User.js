const UserModel = require("../models/User");
const Encryption = require("../utilities/hashed");

const UserRepository = {
    save: async (name, email, password) => {
      const pwd = await Encryption.hash(password);
      const user = new UserModel({
        name: name,
        email : email,
        password: pwd,
        goal: [],
        dailyLog : [],
      });
      return user.save();
    },
    findEmail: async(email) =>{
        const user = await UserModel.findOne({
            "email": email
        })
        return user
    },
   comparePwd: async(hashedPwd, pwd) =>{
    return await Encryption.compare(hashedPwd, pwd);
   }
  };
  
  module.exports = UserRepository;
  