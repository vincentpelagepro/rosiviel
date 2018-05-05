/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

/*
 * Local import
 */
// components
import Loading from 'src/components/Loading';

// containers
import DateSelector from 'src/containers/DateSelector';

// Charts
import { Doughnut, Pie, HorizontalBar } from 'src/components/Charts/ChartsConstructor';
import { barData, barOptions } from './chartsConfigs/barCharts';
import { horizBarData, horizBarOptions } from './chartsConfigs/horizBarCharts';
import { dougData } from './chartsConfigs/dougCharts';
import { pieData } from './chartsConfigs/pieCharts';

/*
 * Code
 */
class Home extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    dataApiLoad: PropTypes.bool.isRequired,
    dataApi: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
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
    const {
      textCampaigns, textAds, textAdgroups, textKeywords,
    } = dataText;

    // récupérer les actions
    const { getDataFromApi, clearDatas } = this.props.actions;

    // données de l'api
    // Données pour le graph campaign
    const campaignsData = this.props.dataApi[0];
    const campaignsLabels = campaignsData.map(data => data.Campaign);
    const campaignsDatasets = campaignsData.map(data => data.Clicks);
    const campaignsTitle = 'Campaigns';
    // Données pour le graph Adgroups
    const adgroupsData = this.props.dataApi[1];
    const adgroupsLabels = adgroupsData.map(data => data['Ad group']);
    const adgroupsDatasets = adgroupsData.map(data => data.Clicks);
    // Données pour le graph Ads
    const adsData = this.props.dataApi[2];
    const adsLabels = adsData.map(data => data['Headline 2']);
    const adsDatasets = adsData.map(data => data.Clicks);
    const adsTitle = 'Ads';
    // Données pour le graph Keywords
    const keywordsData = this.props.dataApi[3];
    const keywordsLabels = keywordsData.map(data => data.Keyword);
    const keywordsDatasets = keywordsData.map(data => data.Clicks);
    // Données pour textes calculés en back pour les blocs de contenus
    const keyNumbers = this.props.dataApi[4];

    return (
      <div id="app-home">
        <h1 className="title h1">{dataText.title}</h1>
        <p className="title-detail">{dataText.detailTitle}</p>
        <main id="main" className="container">
          <div className="main-content">
            <div id="app-home-date">
              <DateSelector
                dataText={dataText}
                getDataFromApi={getDataFromApi}
                clearDatas={clearDatas}
              />
            </div>
            <div className="row chart-container">
              <div className="col-xs-12 col-md-8  chart-container-chart">
                <HorizontalBar
                  data={barData(campaignsLabels, campaignsTitle, campaignsDatasets)}
                  options={horizBarOptions}
                />
              </div>
              <div className="col-xs-12 col-md-4  chart-container-text">
                <a data-tip data-for="campaigntool" className="glyphicon glyphicon-info-sign tool-info" />
                <ReactTooltip place="right" id="campaigntool" type="dark" effect="solid">
                  <p>{textCampaigns.tooltip}</p>
                  <p>{textCampaigns.tooltip2}</p>
                </ReactTooltip>
                <h2 className="content-title">{textCampaigns.title}</h2>
                <p className="content-text"><span>{keyNumbers[0][0]}</span>{textCampaigns.clicks}</p>
                <p className="content-text">{textCampaigns.average}<span>{keyNumbers[0][1]}</span></p>
                <p className="content-text">{textCampaigns.bestName}<span>{campaignsData[0].Campaign}</span> (<span>{campaignsData[0].Clicks}</span>{textCampaigns.clicks})</p>
                <p className="content-text">{textCampaigns.content}</p>
              </div>
            </div>
            <hr />
            <div className="row chart-container">
              <div className="col-xs-12 col-md-8  chart-container-chart order-right">
                <Doughnut
                  data={dougData(adgroupsLabels, adgroupsDatasets)}
                />
              </div>
              <div className="col-xs-12 col-md-4  chart-container-text order-left">
                <a data-tip data-for="adgroupstool" className="glyphicon glyphicon-info-sign tool-info" />
                <ReactTooltip place="right" id="adgroupstool" type="dark" effect="solid">
                  <p>{textAdgroups.tooltip}</p>
                </ReactTooltip>
                <h2 className="content-title">{textAdgroups.title}</h2>
                <p className="content-text"><span>{keyNumbers[1][0]}</span>{textAdgroups.clicks}</p>
                <p className="content-text">{textAdgroups.average}<span>{keyNumbers[1][1]}</span></p>
                <p className="content-text">{textAdgroups.bestName}<span>{adgroupsData[0]['Ad group']}</span> (<span>{adgroupsData[0].Clicks}</span>{textAdgroups.clicks})</p>
                <p className="content-text">{textAdgroups.content}</p>
              </div>
            </div>
            <hr />
            <div className="row chart-container">
              <div className="col-xs-12 col-md-8  chart-container-chart">
                <HorizontalBar
                  data={horizBarData(adsLabels, adsTitle, adsDatasets)}
                  options={barOptions}
                />
              </div>
              <div className="col-xs-12 col-md-4  chart-container-text">
                <a data-tip data-for="adstool" className="glyphicon glyphicon-info-sign tool-info" />
                <ReactTooltip place="right" id="adstool" type="dark" effect="solid">
                  <p>{textAds.tooltip}</p>
                  <p>{textAds.tooltip2}</p>
                </ReactTooltip>
                <h2 className="content-title">{textAds.title}</h2>
                <p className="content-text"><span>{keyNumbers[2][0]}</span>{textAds.clicks}</p>
                <p className="content-text">{textAds.average}<span>{keyNumbers[2][1]}</span></p>
                <p className="content-text">{textAds.bestName}<span>{adsData[0]['Headline 2']}</span> (<span>{adsData[0].Clicks}</span>{textAds.clicks})</p>
                <p className="content-text">{textAds.content}</p>
              </div>
            </div>
            <hr />
            <div className="row chart-container">
              <div className="col-xs-12 col-md-8  chart-container-chart order-right">
                <Pie
                  data={pieData(keywordsLabels, keywordsDatasets)}
                />
              </div>
              <div className="col-xs-12 col-md-4  chart-container-text order-left">
                <a data-tip data-for="keywordtool" className="glyphicon glyphicon-info-sign tool-info" />
                <ReactTooltip place="right" id="keywordtool" type="dark" effect="solid">
                  <p>{textKeywords.tooltip}</p>
                  <p>{textKeywords.tooltip2}</p>
                </ReactTooltip>
                <h2 className="content-title">{textKeywords.title}</h2>
                <p className="content-text"><span>{keyNumbers[3][0]}</span>{textKeywords.clicks}</p>
                <p className="content-text">{textKeywords.average}<span>{keyNumbers[3][1]}</span></p>
                <p className="content-text">{textKeywords.bestName}<span>{keywordsData[0].Keyword}</span> (<span>{keywordsData[0].Clicks}</span>{textKeywords.clicks})</p>
                <p className="content-text">{textKeywords.content}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

/*
 * Export default
 */
export default Home;
