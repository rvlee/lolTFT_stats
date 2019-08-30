const express = require('express');
const serverUtils = require('../utils/serverUtils');
const userUtils = require('../utils/user');

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
          res.send({
            accountId: userInfo.id,
            ...userUtils.parseUser(JSON.parse(data2)),
          });
        }
      });
    }
  });
});

module.exports = router;
