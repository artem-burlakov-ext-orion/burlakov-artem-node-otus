const {Schema, model} = require('mongoose');

const groupSchema = new Schema({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  },
  speaker: {
    type: Schema.Types.ObjectId,
    ref: 'Speaker'
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  start: {
    type: Date,
    required: true
  },
  finish: {
    type: Date,
    required: true
  },
});

module.exports = model('Group', groupSchema);