import {
  connect,
} from 'react-redux';
import {
  bindActionCreators,
} from 'redux';
import {
  addUser,
} from '../action/userAction';
import Index from '../page/homepage';

const mapStateToProps = (state) => (
  {
    user: state.user.info,
  }
);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addUser,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Index);
