export const barData = (labels, title, datasets) => ({
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
export const barOptions = {
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
    }],
  },
};
