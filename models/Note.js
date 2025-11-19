const mongoose = require('mongoose');
const Note = new mongoose.Schema({ title: String, content: String });
module.exports = mongoose.model('Note', Note);
