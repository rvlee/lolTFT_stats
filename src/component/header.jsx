import React from 'react';

const {
  Link,
} = require('react-router');

// css
require('../css/header.css');

const header = (props: any) => (
  <div className="header">
    Header
    <Link to="/">HOME</Link>
    <Link to="/item">ITEM</Link>
  </div>
);

module.exports = header;
