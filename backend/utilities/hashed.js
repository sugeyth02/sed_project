const bycrypt = require('bcrypt');

const Encryptation = {
    hash : (dato)=>{
        const pwd = bycrypt.hash(dato,10)
        return pwd
    },
    compare: (hashed, pwd)=>{
        return bycrypt.compare(pwd, hashed)
    }

}
module.exports = Encryptation