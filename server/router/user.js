const express = require('express');
const serverUtils = require('../utils/serverUtils');

const router = express.Router();

router.get('/', (req, res) => {
  const {
    username,
  } = req.query;
  serverUtils.getRequest(null, {
    secret_key: true,
    riotUrl: serverUtils.getRiotUrls.SUMMONER_URL(username),
  }, (error, data) => {
    if (!error) {
      const userInfo = JSON.parse(data);
      serverUtils.getRequest(null, {
        secret_key: true,
        riotUrl: serverUtils.getRiotUrls.SUMMONER_INFO_URL(userInfo.id),
      }, (err, data2) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data2);
        }
      });
    }
  });
});

module.exports = router;
