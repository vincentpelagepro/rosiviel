/*
 *
 */


// DB
export const GET_DATA_FROM_DB = 'GET_DATA_FROM_DB';

// Login
export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const CLEAR_LOGIN = 'CLEAR_LOGIN';

// Logout
export const LOGOUT = 'LOGOUT';


/*
 * Initial state
 */
const initialState = {
  login: '',
  password: '',
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN: {
      // console.log(action.name);
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case CLEAR_LOGIN: {
      // console.log("clearLogin");
      return {
        ...state,
        login: '',
        password: '',
      };
    }
    default:
      return state;
  }
};


/*
 * Action creators
 */

// DB
export const getDataFromDB = () => ({
  type: GET_DATA_FROM_DB,
});

// Login
export const changeLogin = (name, value) => ({
  type: CHANGE_LOGIN,
  name,
  value,
});

export const clearLogin = () => ({
  type: CLEAR_LOGIN,
});

// logout
export const Logout = () => ({
  type: LOGOUT,
});
