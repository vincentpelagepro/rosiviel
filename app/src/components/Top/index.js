/*
 * Npm import
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/*
 * Local import
 */
// components
import Loading from 'src/components/Loading';
import SideBarRight from 'src/components/Template/SideBarRight';

// containers
import SideBarLeft from 'src/containers/SideBarLeft';

// functions
import { getTopChart, setColor } from './topTools';

/*
 * Code
 */
class Top extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    dataApiLoad: PropTypes.bool.isRequired,
    dataText: PropTypes.object.isRequired,
    dateBegin: PropTypes.string.isRequired,
    dateEnd: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    dataApi: PropTypes.array.isRequired,
  }

  state = {
    pathname: '',
  }

  componentWillMount() {
    this.props.actions.clearDatas();
    // On récupère le path actuel et on le met dans le state
    const { pathname } = this.props.location.pathname;
    this.setState({
      pathname,
    });
  }

  componentWillReceiveProps(nextProps) {
    // On compare le path actuel au path précédent
    if (nextProps.location.pathname !== this.state.pathname) {
      const { pathname } = nextProps.location;
      // On crée un array pour isoler groupType et topType
      const strArr = pathname.split('/');

      const topType = strArr[1];
      const groupType = strArr[3];
      // On envoie la requête vers le back avec groupType et topType
      this.props.actions.getDataFromApi(topType, groupType);
      // On met à jour le state avec le path actuel
      this.setState({
        pathname,
        previous: this.props.dataApi[3],
      });
    }
  }

  render() {
    // récupérer le texte de l'appli
    const { dataText, dateEnd, dateBegin } = this.props;
    const { content, informations } = dataText;
    const { groupType, topType } = this.props.match.params;
    const chartData = this.props.dataApi;
    const labels = chartData[0];
    const datasets = chartData[1];
    const sideBarRightData = chartData[2];

    const title = `Top ${groupType}`;
    const topChart = getTopChart(topType, labels, datasets, title);
    const borderColor = setColor(groupType);

    //  Mettre en majuscule
    const majGroupType = string => string.charAt(0).toUpperCase() + string.slice(1);
    const topTitle = majGroupType(groupType);

    // récupérer les actions
    // const { getDataFromApi, clearDatas } = this.props.actions;

    // affichage
    // if (!this.props.dataApiLoad || this.state.previous === this.props.dataApi[3]) {
    if (!this.props.dataApiLoad) {
      return (
        <div>
          <SideBarLeft
            groupType={groupType}
          />
          <div id="top-loader">
            <Loading />
          </div>
        </div>
      );
    }
    return (
      <main id="app-top" className="container-fluid">
        <div className="row">
          <SideBarLeft
            groupType={groupType}
          />
          <section id="data-content" className="col-md-6 col-md-offset-3">
            <Link to={`/${groupType}/`}><button className={`${borderColor} top-button`}><span className="glyphiconglyphicon-menu-left" aria-hidden="true" />{content.backBtn} {topTitle}</button></Link>
            <h1 className="h1">{topTitle}{content.title}{topType}</h1>
            <div id="data-content-date">
              <span>{`${dataText.date}: `}</span>{`${dateBegin} / ${dateEnd}`}
            </div>
            {topChart}
          </section>
          <SideBarRight
            sideBarText={informations}
            sideBarRightData={sideBarRightData}
            groupType={topTitle}
            topType={topType}
          />
        </div>
      </main>
    );
  }
}

/*
 * Export default
 */
export default Top;
