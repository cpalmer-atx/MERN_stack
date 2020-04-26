const express = require('express');             // express now includes body parser
const mongoose = require('mongoose');           // Helps connect to MongoDB
// const bodyParser = require('body-parser');   // no longer needed

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
// app.use(bodyParser.json());                  // body parser now bundled with express
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;   // Retrieves the mongoURI key from keys.js

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))    // returns 'MongoDB Connected... if connects
    .catch(err => console.log(err));                    // else returns error message

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
