const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: {type: String, required: true},
  publicationDate: {type: Date, required: true},
  lastUpdate: {type: Date, required: true},
  status: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  photo: {type: String},
  price: {type: Number},
  phone: {type: String},
  location: {type: String},
});

module.exports = mongoose.model('Post', postSchema);
