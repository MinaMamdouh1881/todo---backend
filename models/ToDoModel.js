const mongoose = require('mongoose');

const toDOSchema = mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('ToDo', toDOSchema);
