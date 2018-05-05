/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
// components
import Card from 'src/components/Template/Card';
import Table from 'src/components/Template/Table';
import Loading from 'src/components/Loading';

// containers
import SideBarLeft from 'src/containers/SideBarLeft';
import DateSelector from 'src/containers/DateSelector';

/*
 * Code
 */
class Adgroups extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    dataApiLoad: PropTypes.bool.isRequired,
    dataApi: PropTypes.array.isRequired,
    dataText: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.actions.clearDatas();
    this.props.actions.getDataFromApi();
  }

  render() {
    // console.log(localStorage.getItem('r8K23Jwn114Jf2Z33r8SD4v7S89tt2'));
    // console.log(localStorage.getItem('token'));
    // console.log(localStorage);
    // console.log('render Adroups');
    if (!this.props.dataApiLoad) {
      return (
        <Loading />
      );
    }
    // récupérer le texte de l'appli
    const { dataText } = this.props;
    const {
      groupeType, title, cards, table,
    } = dataText;

    // récupérer les actions
    const { getDataFromApi, clearDatas } = this.props.actions;

    // données de l'api
    const cardsData = this.props.dataApi[0];
    const tableData = this.props.dataApi[1];

    // //Mettre en minuscle
    // const lowGroupType = string => string.charAt(0).toLowerCase() + string.slice(1);
    // const groupType = lowGroupType("Adgroups");
    return (
      <main id="app-adgroups" className="container-fluid">
        <div className="row">
          <SideBarLeft
            groupType="adgroups"
          />
          <section className="col-md-10 col-md-offset-2">
            <h1 className="h1">{groupeType}{title}</h1>
            <DateSelector
              dataText={dataText}
              getDataFromApi={getDataFromApi}
              clearDatas={clearDatas}
            />
            <Card
              cardsDatas={cardsData}
              dataText={cards}
            />
            <Table
              tableData={tableData}
              dataText={table}
              groupType={groupeType}
            />
          </section>
        </div>
      </main>
    );
  }
}

/*
 * Export default
 */
export default Adgroups;
