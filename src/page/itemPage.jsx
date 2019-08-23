import React from 'react';

// css
require('../css/itemPage.css');

type Props = {
  itemList: any
}

const ItemPage = (props: Props) => {
  const {
    itemList,
  } = props;
  const list = Object.keys(itemList).map((key) => {
    const item = itemList[key];
    return (
      <div className="item">
        <img alt={item.logo.alt} src={item.logo.src} />
      </div>
    );
  });
  return (
    <div className="item-page">
      <h1>This is the Item Page</h1>
      <div className="item-container">{list}</div>
    </div>
  );
};

module.exports = ItemPage;
