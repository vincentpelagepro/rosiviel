export const lineData = (labels, title, datasets) => ({
  labels,
  datasets: [
    {
      label: title,
      fill: true,
      lineTension: 0.3,
      backgroundColor: 'rgba(247,184,1,0.4)',
      borderColor: 'rgba(247,184,1,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'bevel',
      pointBorderColor: 'rgba(243,91,4,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(243,91,4,1)',
      pointHoverBorderColor: 'rgba(243,91,4,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 20,
      data: datasets,
    },
  ],
});
const sumObj = function (obj) {
  return Object.keys(obj).reduce((sum, next) => sum + obj[next], 0);
};
export const lineOptions = {

  tooltips: {
    enabled: true,
    titleFontColor: '#ffffff',

    callbacks: {
      label(tooltipItems, data) {
        const metrics = data.datasets[0].data;

        return `${tooltipItems.yLabel} clics ` + ` |  ${((tooltipItems.yLabel / sumObj(metrics)) * 100).toFixed(2)} %`;
      },
    },
  },
  scales: {
    xAxes: [{
      ticks: {
        stepSize: 1,
        min: 0,
        autoSkip: false,
      },
    }],
  },
};
