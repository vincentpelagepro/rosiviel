/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
// config
import { axiosBasepath } from '../../config';

// reducer
import { GET_DATA_FROM_API_TO_TOP, saveDataFromApi } from '../reducers/TopReducer';

// date converter
import dateConverter from './utils/dateConverter';

// header jwt
import jWTHeader from './utils/jWTHeader';

/*
 * Code
 */
const TopMiddleware = store => next => (action) => {
  // récupérer les dates
  const { dateBegin, dateEnd } = store.getState().AppReducer;
  // reformater les dates pour nodeadwords
  const dateBeginConverted = dateConverter(dateBegin);
  const dateEndConverted = dateConverter(dateEnd);

  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case GET_DATA_FROM_API_TO_TOP: {
      // authentification jwt
      const config = {};
      jWTHeader(config);

      // ajax
      axios
        .post(`${axiosBasepath}top/api`, {
          topType: action.topType,
          groupType: action.groupType,
          dates: {
            dateBegin: dateBeginConverted,
            dateEnd: dateEndConverted,
          },
        }, config)
        .then(({ data }) => {
          store.dispatch(saveDataFromApi(data));
        })
        .catch(() => {
          // console.log('TopMiddleware : getData n\'est pas passé');
        });
      break;
    }
    default:
      // console.log(action);
  }

  // Go to the next
  next(action);
};


/*
 * Export default
 */
export default TopMiddleware;