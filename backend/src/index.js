const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').server(app);
const io = require('socket.io')(server);

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0-cvd76.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);
