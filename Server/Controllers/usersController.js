const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User= require("../model/User")
require('dotenv').config()


  async function addUser(req, res, next) {
    console.log("hello");
    try {
      const {passportId, name, email, phone,password }= req.body;
      // Validate user type
      if(!passportId || !name || !email || !phone) {
        res.status(400)
        throw new Error('all fields required');
      }
      // hash Password
      const hashedPassword = await bcrypt.hash(password, 10)
      // Create new user
      const newUser = new User({ passportId,name, email,phone,password:hashedPassword});
  
      // Save user to database
      await newUser.save();
      res.status(201).json({message:"userCreated",User:newUser});
    } catch (err) {
      if (err.code === 11000) {
        res.status(400).json({ error: 'Duplicate passport ID or email.' });
      } else {
        next(err);
      }
    }
  }
  

module.exports = {addUser}