/*
 * Types
 */
// API
export const GET_DATA_FROM_API_TO_TOP = 'GET_DATA_FROM_API_TO_TOP';
export const SAVE_DATA_FROM_API_TO_TOP = 'SAVE_DATA_FROM_API_TO_TOP';

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
    case SAVE_DATA_FROM_API_TO_TOP: {
      return {
        ...state,
        dataApi: action.data,
        dataApiLoad: true,
      };
    }
    case CLEAR_DATAS_ADS: {
      // console.log('clear data');
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
export const getDataFromApi = (groupType, topType) => ({
  type: GET_DATA_FROM_API_TO_TOP,
  groupType,
  topType,
});

export const clearDatas = () => ({
  type: CLEAR_DATAS_ADS,
});

export const saveDataFromApi = data => ({
  type: SAVE_DATA_FROM_API_TO_TOP,
  data,
});

// DB
