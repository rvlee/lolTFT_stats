import {
  FETCH_ITEMS_SUCCESS,
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
