import {
  connect,
} from 'react-redux';
import {
  bindActionCreators,
} from 'redux';
import {
  fetchUser,
} from '../action/userAction';
import Index from '../page/HomePage';

const mapStateToProps = (state) => (
  {
    user: state.user.info,
  }
);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchUser,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Index);
