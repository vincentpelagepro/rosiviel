/*
 * Npm import
 */
import express from 'express';

/*
 * Local import
 */
import { helloHome } from '../controllers/indexController';

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

router.get('/', helloHome);


// export du router contenant les routes
export default router;
