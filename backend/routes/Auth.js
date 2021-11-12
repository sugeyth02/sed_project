const router = require('express').Router()
const auth = require('../controllers/Auth')
const validator = require('../validators/User')

router.post('/singUp',validator.singUp,auth.singup)
router.post('/logIn',validator.login,auth.login)


module.exports = router