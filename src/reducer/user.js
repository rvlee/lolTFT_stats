import {
  FETCH_USER_SUCCESS,
} from '../action/userAction';

const intialState = {
  info: {

  },
};

const user = (state = intialState, action) => {
  switch (action.type) {
  case FETCH_USER_SUCCESS:
    return {
      info: action.info,
    };
  default:
    return state;
  }
};

export default user;
