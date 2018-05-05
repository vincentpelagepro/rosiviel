/*
 * Npm import
 */
// Import the mongoose module
import mongoose from 'mongoose';

/*
 * Local import
 */

/*
 * Schéma et models
 */

// créer un schéma
const urlSchema = new mongoose.Schema({
  login: String,
  password: String,
  token: Object,
});

// créer un model à partir de ce schéma
export default mongoose.model('login', urlSchema);
