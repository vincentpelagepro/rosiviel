/*
 * Npm import
 */
import express from 'express';

/*
 * Local import
 */
import { getLogin, getLogout } from '../controllers/dataBaseController';

/*
 * Instanciations
 */

// instanciation du routeur
const router = express.Router();

/*
 * Code
 */

// Routes "secondaires" et réponses associées (importées du controller)
// intégrées au router

router
  .route('/')
  .post(getLogin);

router
  .route('/logout')
  .post(getLogout);


// export du router contenant les routes
export default router;
