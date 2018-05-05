/*
 * Types
 */
// API
export const GET_DATA_FROM_API_TO_ADS = 'GET_DATA_FROM_API_TO_ADS';
export const SAVE_DATA_FROM_API_TO_ADS = 'SAVE_DATA_FROM_API_TO_ADS';

// Actions internes
const CLEAR_DATAS_ADS = 'CLEAR_DATAS_ADS';

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
    case SAVE_DATA_FROM_API_TO_ADS: {
      // console.log(action);
      return {
        ...state,
        dataApi: action.data,
        dataApiLoad: true,
      };
    }
    case CLEAR_DATAS_ADS: {
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
  type: GET_DATA_FROM_API_TO_ADS,
});

export const clearDatas = () => ({
  type: CLEAR_DATAS_ADS,
});

export const saveDataFromApi = data => ({
  type: SAVE_DATA_FROM_API_TO_ADS,
  data,
});

// DB
