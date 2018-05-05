/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
// config
import { jWTKey, axiosBasepath } from '../../config';

// App
import { GET_DATA_FROM_DB, LOGOUT } from '../reducers/LoginReducer';
import { saveDataFromDB } from '../reducers/AppReducer';

/*
 * Code
 */
const DataBaseMiddleware = store => next => (action) => {
  // récupérer les logins
  const { login, password } = store.getState().LoginReducer;

  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case GET_DATA_FROM_DB: {
      // console.log('envoit en DB');
      axios
        .post(
          `${axiosBasepath}dataBase`,
          {
            login,
            password,
          },
        )
        .then(({ data }) => {
          if (data.status === 'connected') {
            localStorage.setItem(jWTKey, data.token);
          }
          // console.log('DataBaseMiddleware')
          store.dispatch(saveDataFromDB(data));
        })
        .catch(() => {
          // console.log('DBMiddleware : getData n\'est pas passé');
        });
      break;
    }
    case LOGOUT: {
      // console.log('envoit en DB');
      axios
        .post(`${axiosBasepath}dataBase/logout`)
        .then(() => {
        })
        .catch(() => {
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
export default DataBaseMiddleware;
