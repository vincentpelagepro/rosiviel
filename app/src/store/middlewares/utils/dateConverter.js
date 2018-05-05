// inverser jours et mois et remplacer les - par /
export default date =>
  date.replace(/-/g, ' ').replace(/(\d+)\s(\d+)\s(\d+)/, '$2/$3/$1');
