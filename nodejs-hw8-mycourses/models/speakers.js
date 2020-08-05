const { Schema, model } = require('mongoose');

const speakerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  skill: {
    type: [String],
    required: true
  }
});

module.exports = model('Speaker', speakerSchema);
