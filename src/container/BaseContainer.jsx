import {
  connect,
} from 'react-redux';
import {
  bindActionCreators,
} from 'redux';
import {
  fetchItems,
} from '../action/itemAction';
import Base from '../page/Base';

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchItems,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(Base);
