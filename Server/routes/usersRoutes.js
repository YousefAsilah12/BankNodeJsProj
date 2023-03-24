const express = require('express');
const router = express.Router();
const {
  loginUser
} = require('../Controllers/auth')

const {addUser} = require('../Controllers/usersController')





router.route("/login").post(loginUser)

router.route("/").post(addUser);



module.exports = router