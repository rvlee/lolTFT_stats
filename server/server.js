const express = require('express');
const path = require('path');
const parser = require('body-parser');
const request = require('request');
const apiKey = require('../secret-config');

const app = express();
const PORT = 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get('/user', (req, res) => {
  const {
    username,
  } = req.query;
  request(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${apiKey.riot_secret_key}`, (error, response, body) => {
    res.send(body);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
// Router for Server


app.listen(PORT, () => {
  console.log('Listening to port: ', PORT);
});
