export const ADD_USER = 'ADD_USER';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export const fetchUser = (user) => ({
  type: FETCH_USER,
  user,
});
