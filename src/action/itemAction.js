export const SELECT_ITEM = 'SELECT_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILED = 'FETCH_ITEMS_FAILED';

export const fetchItems = () => ({
  type: FETCH_ITEMS,
});

export const selectItem = (item) => ({
  type: SELECT_ITEM,
  item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item,
});
