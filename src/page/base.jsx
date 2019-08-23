/* @flow */

import React from 'react';
import Header from '../component/header';
// css
require('../css/homepage.css');

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
        {children}
      </div>
    );
  }
}

module.exports = Base;
