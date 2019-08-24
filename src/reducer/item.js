import {
  SELECT_ITEM,
  REMOVE_ITEM,
} from '../action/itemAction';
import itemInitialState from '../config/itemInitialState';

const intialState = itemInitialState;

const item = (state = intialState, action) => {
  switch (action.type) {
  case SELECT_ITEM:
    return {
      ...state,
      selected: [...state.selected, action.item],
    };
  case REMOVE_ITEM:
    return {
      ...state,
      selected: [...action.item],
    };
  default:
    return state;
  }
};

export default item;
