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
class Ads extends React.Component {
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
    if (!this.props.dataApiLoad) {
      return (
        <Loading />
      );
    }
    // récupérer le texte de l'appli
    const { dataText } = this.props;
    const { groupeType } = dataText;

    // récupérer les actions
    const { getDataFromApi, clearDatas } = this.props.actions;

    // données de l'api
    const cardsData = this.props.dataApi[0];
    const tableData = this.props.dataApi[1];

    return (
      <main id="app-ads" className="container-fluid">
        <div className="row">
          <SideBarLeft
            groupType="ads"
          />
          <section className="col-md-10 col-md-offset-2">
            <h1 className="h1">{groupeType}{dataText.title}</h1>
            <DateSelector
              dataText={dataText}
              getDataFromApi={getDataFromApi}
              clearDatas={clearDatas}
            />
            <Card
              cardsDatas={cardsData}
              dataText={dataText.cards}
            />
            <Table
              tableData={tableData}
              dataText={dataText.table}
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
export default Ads;
