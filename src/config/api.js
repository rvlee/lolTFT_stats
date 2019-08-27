const prod = process.env.NODE_ENV === 'production';

module.exports = {
  domain: prod ? '/' : 'http://localhost:3000/api/',
  imageDomain: prod ? '/item/' : 'http://localhost:3000/item/',
};
