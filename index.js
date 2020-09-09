const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Mongo Connection
mongoose.connect('mongodb://localhost/woodlakeBooks',{useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('Successful connection'))
    .catch(err => console.log('Unsuccessful connection'));

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', require('./routes/api/books'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Listen To Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}`));