const config = require('../config/global');
const helper = require('../helpers');
const jwt = require('jsonwebtoken');

module.exports = {
  verifyJwt: function(req, res, next) {
    const token = req.headers.authorization
    try {
      const decoded = jwt.verify(token, config.JWT.secretKey);
      req.decodedToken = decoded;
      console.log(decoded)
      next()
    } catch(err) {
      if (err.name === 'TokenExpiredError') {
        return helper.response(res, 'fail', 'token expired', 401);
      }
      return helper.response(res, 'fail', 'invalid token', 401);
    }
  }
}