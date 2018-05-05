export const horizBarData = (labels, title, datasets) => ({
  labels,
  datasets: [
    {
      label: title,
      backgroundColor: 'rgba(237,128,33,0.9)',
      borderColor: 'rgba(237,128,33,0.9)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(237,128,33,0.7)',
      data: datasets,
    },
  ],
});
export const horizBarOptions = {
  tooltips: {
    enabled: true,
    titleFontColor: '#ffffff',
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
