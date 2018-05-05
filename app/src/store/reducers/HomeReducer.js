/*
 * Types
 */
// API
export const GET_DATA_FROM_API_TO_HOME = 'GET_DATA_FROM_API_TO_HOME';
export const SAVE_DATA_FROM_API_TO_HOME = 'SAVE_DATA_FROM_API_TO_HOME';

// actions internes
const CLEAR_DATAS_HOME = 'CLEAR_DATAS_HOME';

// DB

/*
 * Initial state
 */
const initialState = {
  dataApi: [],
  dataApiLoad: false,
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA_FROM_API_TO_HOME: {
      // console.log(action);
      return {
        ...state,
        dataApi: action.data,
        dataApiLoad: true,
      };
    }
    case CLEAR_DATAS_HOME: {
      // console.log(action);
      return {
        ...state,
        dataApi: [],
        dataApiLoad: false,
      };
    }
    default:
      return state;
  }
};


/*
 * Action creators
 */

// API
export const getDataFromApi = () => ({
  type: GET_DATA_FROM_API_TO_HOME,
});

export const clearDatas = () => ({
  type: CLEAR_DATAS_HOME,
});

export const saveDataFromApi = data => ({
  type: SAVE_DATA_FROM_API_TO_HOME,
  data,
});
