/*
 * Npm import
 */
import { AdwordsReport } from 'node-adwords';

/*
 * Token
 */

// TOKEN utilisateur
const report = ({
  developerToken,
  userAgent, clientCustomerId, client_id, client_secret, refresh_token,
}) =>
  new AdwordsReport({
    developerToken,
    userAgent,
    clientCustomerId,
    client_id,
    client_secret,
    refresh_token,
  });


export default report;
