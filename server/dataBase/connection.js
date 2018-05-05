/*
 * Npm import
 */
import mongoose from 'mongoose';

/*
 * Local import
 */
import databaseConfig from './config';

/*
 * Connnexion DB
 */
// Pas top!!!
// nécessaire pour que les query sur les models soient de vraies promesses
// ligne a potentiellement dupliquer dans les fichiers où sont définis les models, en cas de soucis
mongoose.Promise = global.Promise;

let dbconnection

export default () => {
  return new Promise((resolve, reject) => {
    // Paramètres de connexion
    const mongoDB = databaseConfig;
    mongoose.connect(mongoDB, {
      useMongoClient: true,
    });
    // lancer et stocker la connexion
    const db = mongoose.connection;
    // Tester la connexion
    db.on('error', (err) => {
      console.error.bind(console, 'MongoDB connection error:')
      reject(err)
    });
    db.once('open', () => {
      console.log('connected to the DB :)');
      resolve(db)
    });

    dbconnection = db; // Stock dbs
  });
};


export const closeDB = () => {
  dbconnection.close()
  console.log('connection closed')
};
