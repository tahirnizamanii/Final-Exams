// backend/models/poetrySchema.js
const mongoose = require('mongoose');

const poetrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  poet: {
    type: String,
    required: true,
  },
});

const Poetry = mongoose.model('Poetry', poetrySchema);

module.exports = Poetry;
