/*
 * Types
 */
// API
import dataText from 'src/lang';

// DB
export const SAVE_DATA_FROM_DB = 'SAVE_DATA_FROM_DB';

// LANGUAGE
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

// Dates
export const CHANGE_DATE = 'CHANGE_DATE';


// dates initiales
const nowDate = new Date();
const EndDate = nowDate.toISOString().slice(0, 10);
const BeginDate = new Date(nowDate.getTime() - (7 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10);

/*
 * Initial state
 */
const initialState = {
  dataDBLoad: '',
  language: 'en',
  dataText,
  dateBegin: BeginDate,
  dateEnd: EndDate,
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA_FROM_DB: {
      // console.log(action.data);
      return {
        ...state,
        dataDBLoad: action.data,
      };
    }
    case CHANGE_LANGUAGE: {
      // console.log(action);
      if (state.language === 'en') {
        return {
          ...state,
          language: 'fr',
        };
      }
      return {
        ...state,
        language: 'en',
      };
    }
    case CHANGE_DATE: {
      return {
        ...state,
        dateBegin: action.dateBegin,
        dateEnd: action.dateEnd,
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


// Language
export const changeLanguage = () => ({
  type: CHANGE_LANGUAGE,
});

// Date
export const changeDate = (dateBegin, dateEnd) => ({
  type: CHANGE_DATE,
  dateBegin,
  dateEnd,
});

// DB
export const saveDataFromDB = data => ({
  type: SAVE_DATA_FROM_DB,
  data,
});
