const mongoose = require('mongoose');

let mongoURL;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const secret = require('../secret-config');
  mongoURL = secret.mongodb_url;
} else {
  mongoURL = process.env.MONGODB_URL;
}
const URI = mongoURL;
const connectDb = () => mongoose.connect(URI, {
  useNewUrlParser: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('we are connected');
});

module.exports = connectDb;
