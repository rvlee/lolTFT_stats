import React from 'react';
import BaseTableRow from './BaseTableRow';

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
  case 'TWO_ICON':
    return <BaseTableRow base={value} />;
  default:
    return <div />;
  }
};
