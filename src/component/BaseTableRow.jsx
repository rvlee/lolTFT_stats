import React from 'react';
import {
  items,
} from '../config/items';

const BaseTwoLogo = (props: any) => {
  const {
    base,
  } = props;
  return (
    <div>
      {
        base.map((baseId, index) => {
          const item = items[baseId];
          return (
            <img className="table-img" key={`${baseId}${index}`} src={item.logo.src} alt={item.logo.alt} />
          );
        })
      }
    </div>
  );
};

module.exports = BaseTwoLogo;
