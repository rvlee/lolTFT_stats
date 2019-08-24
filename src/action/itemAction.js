export const SELECT_ITEM = 'SELECT_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const selectItem = (item) => ({
  type: SELECT_ITEM,
  item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item,
});
