// eslint-disable-next-line import/prefer-default-export
const parseUser = (userData) => {
  let RANKED_TFT = null;
  let RANKED_SOLO = null;
  let RANKED_FLEX_SR = null;

  userData.forEach((data) => {
    switch (data.queueType) {
    case 'RANKED_TFT':
      RANKED_TFT = data;
      break;
    case 'RANKED_SOLO_5x5':
      RANKED_SOLO = data;
      break;
    case 'RANKED_FLEX_SR':
      RANKED_FLEX_SR = data;
      break;
    default:
      break;
    }
  });
  return {
    RANKED_TFT,
    RANKED_SOLO,
    RANKED_FLEX_SR,
  };
};

module.exports = {
  parseUser,
};
