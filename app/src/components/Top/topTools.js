import React from 'react';

import { HorizontalBar, Doughnut, Pie, Line, Polar } from 'src/components/Charts/ChartsConstructor';
import { horizBarData, horizBarOptions } from './chartsConfigs/horizBarCharts';
import { dougData } from './chartsConfigs/dougCharts';
import { lineData, lineOptions } from './chartsConfigs/lineCharts';
import { pieData } from './chartsConfigs/pieCharts';
import { polarData } from './chartsConfigs/polarCharts';

export const getTopChart = (topType, labels, datasets, title) => {
  switch (topType) {
    case 'clicks':
      return <HorizontalBar data={horizBarData(labels, title, datasets)} options={horizBarOptions} />;

    case 'impressions':
      return <Doughnut data={dougData(labels, datasets)} />;

    case 'click-through-rate':
      return <Line data={lineData(labels, title, datasets)} options={lineOptions} />;

    case 'cost':
      return <Pie data={pieData(labels, datasets)} />;

    case 'conversions':
      return <Polar data={polarData(labels, datasets)} />;

    default:
      return null;
  }
};

let borderColor;
export const setColor = (groupType) => {
  switch (groupType) {
    case 'campaigns':
      borderColor = 'blue-border';
      return borderColor;
    case 'adgroups':
      borderColor = 'red-border';
      return borderColor;
    case 'ads':
      borderColor = 'white-border';
      return borderColor;
    case 'keywords':
      borderColor = 'orange-border';
      return borderColor;
    default:
      borderColor = 'grey-border';
  }
};
