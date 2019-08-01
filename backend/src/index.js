const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0-cvd76.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);