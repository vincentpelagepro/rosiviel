/*
 * Npm import
 */
import express from 'express';
import bodyParser from 'body-parser';
import expressJwt from 'express-jwt';
import { join } from 'path';

/*
 * Local import
 */

// imports Routers
import getRoutes, { getFakeRoutes } from './routes';

// import jwt secret
import secret from './jWT/config';

// Server
const app = express();

/*
 * Middlewares
 */

// rendre utilisable bodyparser à chaque requète : récupérer req.body
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// authentification/sécurité pour connetion avec API
// Ajouter Authorization pour accepte l'en-tête du middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
});

// On utilise expressJwt pour analyser le token envoyé du middleware
// on exclut Database pour communiquer avec la db et créer un token lors de la 1ere connextion
app.use(expressJwt({
  secret,
  credentialsRequired: false,
  getToken: function fromHeaderOrQuerystring(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    }
    return null;
  },
}).unless({ path: /\/dataBase/i }));


// VRAIES DATA
getRoutes(app);

// // FAKE DATA
// getFakeRoutes(app);

// // PRODUCTION : lancement de l'app via express
// // supprimer/cpmmeneter la ligne app.use('/', indexRoutes);
// // modifier les urls des middlewares front!!!
// // lier le serveur au dossier public
// const assetsPath = join(__dirname, '..', '/public');
// const indexPath = join(__dirname, '..', '/public/index.html');

// // Static Files
// app.use(express.static(assetsPath, {
//   index: false,
// }));

// // All other routes => redirect to our app.
// app.get('*', (request, response) => {
//   response.sendFile(indexPath);
// });


// // écoute du port
// app.set('port', process.env.PORT || 3000);
// // Start on :3000
// app.listen(app.get('port'), () => {
//   console.log('App is running');
// });

// Start on :3000
app.listen(3000, () => {
  console.log('App is running');
});
