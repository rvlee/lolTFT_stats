import {
  imageDomain,
} from '../config/api';

// eslint-disable-next-line import/prefer-default-export
export const getRequest = (url, cb) => fetch(url)
  .then((response) => response.json())
  .then((data) => cb(data));

export const convertItemList = (data) => {
  const itemObj = {
  };
  const baseItemObj = {
  };

  data.forEach((item) => {
    const convert = {
      ...item,
      logo: {
        ...item.logo,
        src: `${imageDomain}${item.logo.src}`,
      },
    };

    itemObj[item.id] = convert;
    if (item.type === 'BASE') {
      baseItemObj[item.id] = convert;
    }
  });
  return {
    baseItems: baseItemObj,
    items: itemObj,
  };
};
