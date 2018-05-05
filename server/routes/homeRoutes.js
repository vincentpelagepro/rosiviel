/*
 * Npm import
 */
import express from 'express';

/*
 * Local import
 */
import { getAllData } from '../controllers/homeController';

/*
 * Instanciations
 */

// instanciation du routeur
const router = express.Router();

/*
 * Router
 */

// Routes "secondaires" et réponses associées (importées du controller)

router
  .route('/api')
  .post(getAllData);

// export du router contenant les routes
export default router;
