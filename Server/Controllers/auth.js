const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res, next) => {
  const {
    email,
    password
  } = req.body;
  try {

    // Find user by email
    const user = await User.findOne({
      email: email
    })
    if (!user) {
      res.statusCode = 404;
      throw new Error('User not found');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.statusCode = 404;
      throw new Error('Invalid password');
    }

    // Generate JWT token
    const token = jwt.sign({
        userId: user.id,
        type: user.type
      },
      process.env.JWTSECRET, {
        expiresIn: '5m'
      }
    );

    // Set JWT token as a cookie in the response
    res.cookie('jwt', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 5 * 60 * 1000) // expires in 5 minutes
    });

    res.json({
      success: true
    });
  } catch (error) {
    next(error);
  }
};


module.exports ={loginUser}