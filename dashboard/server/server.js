/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cloudinary = require('cloudinary').v2;
const multipart = require('connect-multiparty');
const fs = require('fs');
const connectDb = require('../../db/db');
const Items = require('../../db/items');
const secretConfig = require('../../secret-config');

const multipartMiddleware = multipart();

const app = express();
const PORT = 8001;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

cloudinary.config({
  ...secretConfig.cloudinary,
});

const updateItem = (item, cb) => {
  Items.findOneAndUpdate({
    id: item.id,
  }, item, {
    upsert: true,
  }, (err, done) => {
    console.log(done);
    console.log(err);
    cb();
  });
};
app.post('/update/item', multipartMiddleware, (req, res) => {
  const file = req.files.image;
  const {
    item,
  } = req.body;
  const parsedItem = JSON.parse(item);
  if (file) {
    const options = {
      public_id: file.originalFilename.split('.')[0],
      folder: 'items',
    };
    cloudinary.uploader.upload(file.path, options, (error, result) => {
      try {
        fs.unlinkSync(file.path);
        // file removed
        parsedItem.logo.src = result.url;
        updateItem(parsedItem, () => {
          res.send('success');
        });
      } catch (err) {
        console.error(err);
      }
    });
  } else {
    updateItem(parsedItem, () => {
      res.send('success');
    });
  }
});

app.get('/items', (req, res) => {
  Items.find({

  }, (err, items) => {
    res.send(items);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log('Listening to port: ', PORT);
  });
});
