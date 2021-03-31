const helper = require('../helpers');
const User = require('../models/user-model')
const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = {

  getAllUsers: async function(_, res) {
    try {
      const result = await User.find({}, 'full_name username')
      return helper.response(res, 'success', result, 200)
    } catch(err) {
      console.log(err)
      return helper.response(res, 'fail', 'User not found', 500)
    }
  },

  getUser: async function(req, res) {
    const setData = req.body.username
    
    try{
      const {full_name, username} = await User.findOne({username: setData})
      return helper.response(res, 'success', {full_name, username}, 200)
    } catch(err) {
      console.log(err);
      return helper.response(res, 'fail', 'User not found', 500)
    }
  },

  userDelete: async function(req, body) {

    try {
      const result = await User.deleteOne({})
      return helper.response(res, 'success', result, 200)
    } catch(err) {
      console.log(err)
      return helper.response(res, 'fail', `this data can't be deleted`, 500)
    }
  },

  updateUser: async function(req, res) {
    const setDataKey = req.params._id
    const setData = req.body
    setData.password = bcrypt.hashSync(req.body.password, saltRounds)

    try {
      const result = await User.updateOne(setDataKey ,setData)
      return helper.response(res, 'success', result, 200)
    } catch(err) {
      console.log(err)
      return helper.response(res, 'fail', 'failed to updated data', 500)
    }
  }
}