const {Schema, model} = require('mongoose');

const courseSchema = new Schema({
  title: {
    type: String,
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
  lessons: [
    {
      number: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
    }
  ]
  
});

module.exports = model('Course', courseSchema);

