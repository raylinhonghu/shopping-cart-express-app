var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({

  capital: { type: String },
  name: { type: String },
  size: { type: Number }
});

module.exports = mongoose.model('country',countrySchema);
