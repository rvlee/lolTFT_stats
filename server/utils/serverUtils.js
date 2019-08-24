const request = require('request');
const apiKey = require('../../secret-config');

const baseUrl = 'https://na1.api.riotgames.com/lol/';

const SUMMONER_URL = 'SUMMONER_URL';
const SUMMONER_INFO_URL = 'SUMMONER_INFO_URL';

const getRiotUrls = {
  [SUMMONER_URL]: (username) => `${baseUrl}summoner/v4/summoners/by-name/${username}`,
  [SUMMONER_INFO_URL]: (id) => `${baseUrl}league/v4/entries/by-summoner/${id}`,
};

const getRequest = (url, options, cb) => {
  let newUrl = url || options.riotUrl;
  if (options.secret_key) {
    newUrl = `${newUrl}?api_key=${apiKey.riot_secret_key}`;
  }
  request(newUrl, (error, response, body) => {
    if (!error) {
      cb(null, body);
    } else {
      cb(error, null);
    }
  });
};

module.exports = {
  baseUrl,
  getRequest,
  SUMMONER_URL,
  SUMMONER_INFO_URL,
  getRiotUrls,
};
