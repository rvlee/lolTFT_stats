import {
  connect,
} from 'react-redux';
import {
  bindActionCreators,
} from 'redux';
import {
  selectItem,
  removeItem,
} from '../action/itemAction';
import ItemPage from '../page/itemPage';

const mapStateToProps = (state) => (
  {
    itemList: state.item.list,
    selected: state.item.selected,
  }
);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    selectItem,
    removeItem,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
