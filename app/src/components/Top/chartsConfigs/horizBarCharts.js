export const horizBarData = (labels, title, datasets) => ({
  labels,
  datasets: [
    {
      label: title,
      backgroundColor: 'rgba(61,52,139,0.9)',
      borderColor: 'rgba(61,52,139,0.9)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(61,52,139,0.7)',
      data: datasets,
    },
  ],
});
const sumObjct = function (obj) {
  return Object.keys(obj).reduce((sum, next) => sum + obj[next], 0);
};
export const horizBarOptions = {
  tooltips: {
    enabled: true,
    titleFontColor: '#ffffff',

    callbacks: {
      label(tooltipItems, data) {
        const test = data.datasets[0].data;

        return `${tooltipItems.xLabel} clics ` + ` |  ${((tooltipItems.xLabel / sumObjct(test)) * 100).toFixed(2)} %`;
      },
    },
  },
  title: {
    display: false,
    text: '',
  },
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      ticks: {
        beginAtZero: true,
      },
      gridLines: {
        offsetGridLines: true,
      },
    }],
  },
};
