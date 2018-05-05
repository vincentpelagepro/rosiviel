/*
 * Npm import
 */
import express from 'express';

/*
 * Local import
 */
import { getData } from '../controllers/campaignsController';

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
  .post(getData);

// export du router contenant les routes
export default router;
