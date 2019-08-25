import React from 'react';

const {
  Link,
} = require('react-router');

// css
require('../css/header.css');

// eslint-disable-next-line no-unused-vars
const header = (props: any) => (
  <div className="header">
    <div>
      <Link className="header-link" to="/">HOME</Link>
      <Link className="header-link" to="/item">ITEM</Link>
    </div>
  </div>
);

module.exports = header;
