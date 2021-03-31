const helper = require('../helpers');
const User = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/global');
const { createToken } = require('../helpers/create-token');

const saltRounds = 10;

module.exports = {

  userSignUp: async function(req, res) {
    const postUser = new User ({
      full_name: req.body.full_name,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, saltRounds)
    });
    
    try {
      const result = await postUser.save()
      return helper.response(res, 'success', result, 200)
    } catch(err) {
      console.log(err)
      return helper.response(res, 'fail', 'failed to create account!', 500)
    }
  },

  userSignIn: async function(req, res) {
    const setData = req.body

    try {
      const result = await User.findOne({username: setData.username})
      const passwordMatch = bcrypt.compareSync(setData.password, result.password)
      if (passwordMatch) {
        const token = jwt.sign({...result}, config.JWT.secretKey, {
          expiresIn: '1m'
        })
        result.token = {token}
        return helper.response(res, 'success', result.token, 200)
      }
    } catch(err) {
      console.log(err)
      return helper.response(res, 'fail', 'username or password did not match', 500)
    }
  },

  refreshToken: async function(req, res) {
    try {
      if (req.headers.authorization) {
        const payload = jwt.verify(req.headers.authorization, config.JWT.secretKey)
        const RefreshToken = createToken (
          {...payload},
          config.JWT.secretKey,
          '24h'
        );
        const data = {
          refreshToken: RefreshToken
        };
        return helper.response(res, 'success', data, 200)
      }
      return helper.response(res, 'fail', 'Token not found', 401)
    } catch(err) {
      console.log(err)
    }
  }
}