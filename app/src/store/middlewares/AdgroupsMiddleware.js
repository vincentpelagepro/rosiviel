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
import { GET_DATA_FROM_API_TO_ADGROUPS, saveDataFromApi } from '../reducers/AdgroupsReducer';

// date converter
import dateConverter from './utils/dateConverter';

// header jwt
import jWTHeader from './utils/jWTHeader';

/*
 * Code
 */
const AdgroupsMiddleware = store => next => (action) => {
  // récupérer les dates
  const { dateBegin, dateEnd } = store.getState().AppReducer;
  // reformater les dates pour nodeadwords
  const dateBeginConverted = dateConverter(dateBegin);
  const dateEndConverted = dateConverter(dateEnd);

  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case GET_DATA_FROM_API_TO_ADGROUPS: {
      // authentification jwt
      const config = {};
      jWTHeader(config);

      // ajax
      axios
        .post(`${axiosBasepath}adgroups/api`, {
          dateBegin: dateBeginConverted,
          dateEnd: dateEndConverted,
        }, config)
        .then(({ data }) => {
          store.dispatch(saveDataFromApi(data));
        })
        .catch(() => {
          // console.log('AdgroupsMiddleware : getData n\'est pas passé');
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
export default AdgroupsMiddleware;
