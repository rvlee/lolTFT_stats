import {
  connect,
} from 'react-redux';
import {
  bindActionCreators,
} from 'redux';
import {
  selectItem,
  removeItem,
  fetchItems,
} from '../action/itemAction';
import ItemPage from '../page/ItemPage';

const mapStateToProps = (state) => (
  {
    baseItems: state.item.baseItems,
    allItems: state.item.allItems,
    selected: state.item.selected,
  }
);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    selectItem,
    removeItem,
    fetchItems,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
