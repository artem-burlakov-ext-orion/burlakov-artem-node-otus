const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  skill: {
    type: String,
    required: true
  }
});

module.exports = model('Speaker', schema);