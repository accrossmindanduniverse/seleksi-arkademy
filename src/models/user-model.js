const mongoose = require ('mongoose');

const USER_SCHEMA = mongoose.Schema({
  full_name: {
    type: String,
    default: true
  },
  username: {
    type: String,
    default: true,
    lowercase: true
  },
  password: {
    type: String,
    default: true
  }
}, {timestamps: true})

module.exports = mongoose.model('user', USER_SCHEMA);