/*
 * Types
 */
// API
export const GET_DATA_FROM_API_TO_KEYWORDS = 'GET_DATA_FROM_API_TO_KEYWORDS';
export const SAVE_DATA_FROM_API_TO_KEYWORDS = 'SAVE_DATA_FROM_API_TO_KEYWORDS';
const CLEAR_DATAS_KEYWORDS = 'CLEAR_DATAS_KEYWORDS';

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
    case SAVE_DATA_FROM_API_TO_KEYWORDS: {
      // console.log(action);
      return {
        ...state,
        dataApi: action.data,
        dataApiLoad: true,
      };
    }
    case CLEAR_DATAS_KEYWORDS: {
      // console.log(action);
      return {
        ...state,
        dataApiLoad: false,
        dataApi: [],
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
  type: GET_DATA_FROM_API_TO_KEYWORDS,
});

export const clearDatas = () => ({
  type: CLEAR_DATAS_KEYWORDS,
});

export const saveDataFromApi = data => ({
  type: SAVE_DATA_FROM_API_TO_KEYWORDS,
  data,
});

// DB
