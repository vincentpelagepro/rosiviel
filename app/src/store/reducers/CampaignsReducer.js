/*
 * Types
 */
// API
export const GET_DATA_FROM_API_TO_CAMPAIGNS = 'GET_DATA_FROM_API_TO_CAMPAIGNS';
export const SAVE_DATA_FROM_API_TO_CAMPAIGNS = 'SAVE_DATA_FROM_API_TO_CAMPAIGNS';
const CLEAR_DATAS_CAMPAIGNS = 'CLEAR_DATAS_ADGROUPS';
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
    case SAVE_DATA_FROM_API_TO_CAMPAIGNS: {
      // console.log(action);
      return {
        ...state,
        dataApi: action.data,
        dataApiLoad: true,
      };
    }
    case CLEAR_DATAS_CAMPAIGNS: {
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
  type: GET_DATA_FROM_API_TO_CAMPAIGNS,
});

export const clearDatas = () => ({
  type: CLEAR_DATAS_CAMPAIGNS,
});

export const saveDataFromApi = data => ({
  type: SAVE_DATA_FROM_API_TO_CAMPAIGNS,
  data,
});

// DB
