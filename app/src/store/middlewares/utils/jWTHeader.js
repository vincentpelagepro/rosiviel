/*
 * Local import
 */
// jwt
import { jWTKey } from 'src/config';

/*
 * code
 */
export default (config) => {
  // console.log(localStorage.getItem(jWTKey));
  config.headers = { authorization: `Bearer ${localStorage.getItem(jWTKey)}` };
};
