/* @flow */

import React from 'react';
import Header from '../component/header';
// css
require('../css/base.css');

type Props = {
  children: any
};

class Base extends React.Component<Props> {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div>
        <Header />
        <div className="background-container">
          <img className="background-image" alt="map" src="http://localhost:3000/item/map_default3.jpg" />
          <div className="background-map" />
        </div>
        <div className="content-container">{children}</div>
      </div>
    );
  }
}

module.exports = Base;
