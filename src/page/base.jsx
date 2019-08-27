/* @flow */

import React from 'react';
import Header from '../component/header';

import {
  backgroundUrl,
} from '../config/assest';

// css
require('../css/base.css');

type Props = {
  children: any,
  fetchItems: () => {}
};

class Base extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const {
      children,
    } = this.props;
    return (
      <div>
        <Header />
        <div className="background-container">
          <img className="background-image" alt="map" src={backgroundUrl} />
          <div className="background-map" />
        </div>
        <div className="content-container">{children}</div>
      </div>
    );
  }
}

module.exports = Base;
