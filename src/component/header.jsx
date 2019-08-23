import React from 'react';

const {
  Link,
} = require('react-router');

// css
require('../css/header.css');

// eslint-disable-next-line no-unused-vars
const header = (props: any) => (
  <div className="header">
    <Link to="/">HOME</Link>
    <Link to="/item">ITEM</Link>
  </div>
);

module.exports = header;
