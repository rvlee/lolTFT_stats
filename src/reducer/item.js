import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILED,
  SELECT_ITEM,
  REMOVE_ITEM,
} from '../action/itemAction';

const intialState = {
  selected: [],
  baseItems: {

  },
  allItems: {

  },
  combinations: [],
};

const item = (state = intialState, action) => {
  switch (action.type) {
  case FETCH_ITEMS_SUCCESS:
    return {
      ...state,
      baseItems: action.baseItems,
      allItems: action.items,
    };
  case FETCH_ITEMS_FAILED:
    return {
      ...state,
      error: action.error,
    };
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
