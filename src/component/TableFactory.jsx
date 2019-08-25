import React from 'react';

const R = require('ramda');

export default (props: any) => {
  const {
    config,
    item,
  } = props;
  const value = R.path(config.path, item);
  switch (config.type) {
  case 'IMAGE':
    return <img className="table-img" src={value} alt="icon" />;
  case 'TEXT':
    return <div>{value}</div>;
  default:
    return <div />;
  }
};
