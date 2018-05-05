/*
 * Types
 */
// API
export const GET_DATA_FROM_API_TO_ADGROUPS = 'GET_DATA_FROM_API_TO_ADGROUPS';
export const SAVE_DATA_FROM_API_TO_ADGROUPS = 'SAVE_DATA_FROM_API_TO_ADGROUPS';

// actions internes
const CLEAR_DATAS_ADGROUPS = 'CLEAR_DATAS_ADGROUPS';

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
    case SAVE_DATA_FROM_API_TO_ADGROUPS: {
      // console.log(action);
      return {
        ...state,
        dataApi: action.data,
        dataApiLoad: true,
      };
    }
    case CLEAR_DATAS_ADGROUPS: {
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
  type: GET_DATA_FROM_API_TO_ADGROUPS,
});

export const clearDatas = () => ({
  type: CLEAR_DATAS_ADGROUPS,
});

export const saveDataFromApi = data => ({
  type: SAVE_DATA_FROM_API_TO_ADGROUPS,
  data,
});

// DB
