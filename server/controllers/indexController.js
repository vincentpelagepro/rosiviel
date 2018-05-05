/*
 * Npm import
 */

/*
 * Local import
 */
// import apiRequest from '../nodeAdwords/nodeAdwords';
/*
 * Réponses
 */


export const helloHome = (req, res) => {
  res.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
    </div>
  `);
};


// test api
// //export const helloHome = (req, res) => {
//   apiRequest(res);
// };
