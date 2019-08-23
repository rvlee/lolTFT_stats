import {
  ADD_USER,
} from '../action/userAction';

const intialState = {
  info: {

  },
};

const user = (state = intialState, action) => {
  switch (action.type) {
  case ADD_USER:
    return {
      info: action.user,
    };
  default:
    return state;
  }
};

export default user;
