let backgroundColor;
export const setBackgroundColor = (groupType) => {
  switch (groupType) {
    case 'campaigns':
      backgroundColor = 'blue-background';
      return backgroundColor;
    case 'adgroups':
      backgroundColor = 'red-background';
      return backgroundColor;
    case 'ads':
      backgroundColor = 'white-background';
      return backgroundColor;
    case 'keywords':
      backgroundColor = 'orange-background';
      return backgroundColor;
    default:
      backgroundColor = 'blue-background';
      return backgroundColor;
  }
};

let textColor;
export const setTextColor = (groupType) => {
  switch (groupType) {
    case 'campaigns':
      textColor = 'white-text';
      return textColor;
    case 'adgroups':
      textColor = 'white-text';
      return textColor;
    case 'ads':
      textColor = 'black-text';
      return textColor;
    case 'keywords':
      textColor = 'black-text';
      return textColor;
    default:
      textColor = 'white-text';
      return textColor;
  }
};
