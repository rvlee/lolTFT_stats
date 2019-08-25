let url = '';
if (process.env.NODE_ENV !== 'production') {
  url = 'http://localhost:3000';
}

const backgroundUrl = `${url}/item/map_default3.jpg`;

module.exports = {
  backgroundUrl,
};
