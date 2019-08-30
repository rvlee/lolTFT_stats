/* @flow */

import React from 'react';

// css
require('../css/homepage.css');

type Props = { user: any, fetchUser: (user: any) => void };

type State = { val: string }

class Index extends React.Component<Props, State> {
  state: State = {
    val: '',
  }

  onSearch = () => {
    const {
      val,
    } = this.state;
    this.props.fetchUser(val);
  }

  onInputChange = (event: any) => {
    this.setState({
      val: event.target.value,
    });
  }

  render() {
    const {
      val,
    } = this.state;
    const {
      user,
    } = this.props;
    return (
      <div className="home">
        <div className="main">Index</div>
        <input value={val} onChange={this.onInputChange} />
        <button type="button" onClick={this.onSearch}>Search</button>
        <div>{JSON.stringify(user)}</div>
      </div>
    );
  }
}

module.exports = Index;
