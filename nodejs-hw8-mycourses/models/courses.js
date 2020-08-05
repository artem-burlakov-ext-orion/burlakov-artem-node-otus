const {Schema, model} = require('mongoose');

const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  finish: {
    type: Date,
    required: true
  },
  speaker: {
    type: Schema.Types.ObjectId,
    ref: 'Speaker',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
});

module.exports = model('Course', courseSchema);

