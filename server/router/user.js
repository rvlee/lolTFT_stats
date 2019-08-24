const express = require('express');
const request = require('request');

const apiKey = require('../../secret-config');

const router = express.Router();

// middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now());
//   next();
// });

router.get('/', (req, res) => {
  const {
    username,
  } = req.query;
  request(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${apiKey.riot_secret_key}`, (error, response, body) => {
    const userInfo = JSON.parse(body);
    request(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${userInfo.id}?api_key=${apiKey.riot_secret_key}`, (err, resp, data) => {
      res.send(data);
    });
  });
});
module.exports = router;
