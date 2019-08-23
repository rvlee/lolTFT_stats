import {
  connect,
} from 'react-redux';
// import {
//   bindActionCreators,
// } from 'redux';
// import {
//   addUser,
// } from '../action/userAction';
import ItemPage from '../page/itemPage';

const mapStateToProps = (state) => (
  {
    itemList: state.item.list,
  }
);

// const mapDispatchToProps = (dispatch) => (
//   bindActionCreators({
//     addUser,
//   }, dispatch)
// );

export default connect(mapStateToProps)(ItemPage);
