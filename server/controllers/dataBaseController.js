/*
 * Npm import
 */
// jwt module
import jwt from 'jsonwebtoken';

/*
 * Local import
 */

// imports des models mongoose
import loginModel from '../dataBase/models/loginModel';
import databaseConnection, { closeDB } from '../dataBase/connection';

// import jwt secret
import secret from '../jWT/config';

/*
 * Réponses
 */

// stocker le token Adwords
export let reqSession;


// requètes à la DB: vérif login
export const getLogin = (req, res) => {
  const { login, password } = req.body;
  // connection à la Database
  databaseConnection()
    .then(() => {
      // console.log(password)
      return loginModel.findOne({ login })
    })
    .then((result) => {
      // verifications du login et password
      // console.log('checking password');
      if (result.password === password) {
        const myToken = jwt.sign({ user: result.login, scope: 'user' }, secret);
        reqSession = result.token;
        res.send({ status: 'connected', token: myToken });
      }
      else {
        res.send('notConnected');
      }
    })
    .catch((err) => {
      console.log(err);
      res.send('notConnected');
    })
    .finally(() => closeDB());
};

// logout
export const getLogout = (req, res) => {
  console.log('logout');
  reqSession = null;
};
