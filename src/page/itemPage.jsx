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
      <div className="item">
        <img
          alt={combinedItem.logo.alt}
          src={combinedItem.logo.src}
        />
      </div>
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
        <div className="item-container">
          <div className="base-items-title">Base Items</div>
          <div className="base-items">{list}</div>
        </div>
        <div className="item-selected-container">
          <div className="selected-items-wrapper">
            <div className="selected-items-title">Selected Items</div>
            <div className="selected-items">{selectedList}</div>
          </div>
          {
            duplicate.length !== 0
              ? (
                <div className="can-build-items-wrapper">
                  <div className="can-build-items-title">Can Build Items</div>
                  <div className="can-build-items">{this.renderCombinationList(duplicate)}</div>
                </div>
              ) : null
          }
          {
            nonDuplicate.length !== 0
              ? (
                <div className="could-build-items-wrapper">
                  <div className="could-build-items-title">Could Build Items</div>
                  <div className="could-build-items">{this.renderCombinationList(nonDuplicate)}</div>
                </div>
              ) : null
          }
        </div>
      </div>
    );
  }
}

module.exports = ItemPage;
