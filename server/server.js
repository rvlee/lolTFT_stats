const express = require('express');
const path = require('path');
const parser = require('body-parser');
const user = require('./router/user');
const item = require('./router/item');
const connectDb = require('../db/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, './img')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Router for Server
app.use('/api/user', user);
app.use('/api/item', item);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log('Listening to port: ', PORT);
  });
});
