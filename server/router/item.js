const express = require('express');
const Items = require('../../db/items');

const router = express.Router();

router.get('/', (req, res) => {
  Items.find({

  }, (err, users) => {
    res.send(users);
  });
});

module.exports = router;
