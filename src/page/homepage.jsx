/* @flow */

import React from 'react';

// css
require('../css/homepage.css');

type Props = { list: Array<string>, addList: (item: string) => void };

type State = { val: string }

class Index extends React.Component<Props, State> {
  state: State = {
    val: '',
  }

  onAddItem = () => {
    this.props.addList(this.state.val);
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
      list,
    } = this.props;

    return (
      <div>
        <div className="main">Index</div>
        <input value={val} onChange={this.onInputChange} />
        <button type="button" onClick={this.onAddItem}>Add Items</button>
        <ul>
          {
            list.map((item, index) => (<li key={`item-${index}`}>{item}</li>))
          }
        </ul>
      </div>
    );
  }
}

module.exports = Index;
