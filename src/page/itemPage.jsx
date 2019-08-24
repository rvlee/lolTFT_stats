import React from 'react';

import {
  items,
} from '../config/items';
import {
  parse,
} from '../utils/utils';

// css
require('../css/itemPage.css');

type Props = {
  itemList: any,
  selected: Array<any>,
  selectItem: Function,
  removeItem: Function,
}

type State = {
  combinations: any
}

const getCombinations = (props) => {
  const {
    selected,
  } = props;
  let combinations = [];
  selected.forEach((item) => {
    combinations = [...combinations, ...item.combinations];
  });
  return combinations;
};

class ItemPage extends React.Component<Props, State> {
  state: State = {
    combinations: getCombinations(this.props),
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const combinations = getCombinations(nextProps);
    if (prevState.combinations !== combinations) {
      return {
        combinations,
      };
    }
    return null;
  }


  onSelectItem = (item) => {
    this.props.selectItem(item);
  }

  onRemoveItem = (index) => {
    const temp = [...this.props.selected];
    temp.splice(index, 1);
    this.props.removeItem(temp);
  }

  renderCombinationList = (comboList) => comboList.map((combId) => {
    const combinedItem = items[combId];
    return (
      <img
        alt={combinedItem.logo.alt}
        src={combinedItem.logo.src}
      />
    );
  })

  render() {
    const {
      itemList,
      selected,
    } = this.props;

    const {
      combinations,
    } = this.state;

    const list = Object.keys(itemList).map((key) => {
      const item = itemList[key];
      return (
        <div className="item">
          <img
            onClick={this.onSelectItem.bind(this, item)}
            alt={item.logo.alt}
            src={item.logo.src}
          />
        </div>
      );
    });

    const selectedList = selected.map((item, index) => (
      <div className="item">
        <img
          onClick={this.onRemoveItem.bind(this, index)}
          alt={item.logo.alt}
          src={item.logo.src}
        />
      </div>
    ));

    const {
      duplicate,
      nonDuplicate,
    } = parse(combinations, selected);

    return (
      <div className="item-page">
        <h1>This is the Item Page</h1>
        <div className="item-container">{list}</div>
        <div className="item-selected-container">{selectedList}</div>
        <div>{this.renderCombinationList(duplicate)}</div>
        <div>{this.renderCombinationList(nonDuplicate)}</div>
      </div>
    );
  }
}

module.exports = ItemPage;
