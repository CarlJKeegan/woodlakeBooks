const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    dateReleased: String,
    image: String,
    genre: String,
    price: Number
});

module.exports = Book = mongoose.model('book', bookSchema);