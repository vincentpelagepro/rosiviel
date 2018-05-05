export const polarData = (labels, datasets) => ({
  datasets: [{
    data: datasets,
    backgroundColor: [
      'rgba(161,240,222,0.9)',
      'rgba(226,202,20,0.9)',
      'rgba(249, 167, 175,0.7)',
      'rgba(108,90,73,0.9)',
      'rgba(200,173,85,0.9)',
    ],
    hoverBackgroundColor: [
      'rgba(161,240,222,0.5)',
      'rgba(226,202,20,0.5)',
      'rgba(249, 167, 175,0.5)',
      'rgba(108,90,73,0.5)',
      'rgba(200,173,85,0.5)',
    ],
    hoverBorderColor: [
      'rgba(161,240,222,0.5)',
      'rgba(226,202,20,0.5)',
      'rgba(249, 167, 175,0.5)',
      'rgba(108,90,73,0.5)',
      'rgba(200,173,85,0.5)',
    ],
  }],
  labels,
});
