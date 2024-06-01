import {Dimensions} from 'react-native';

const heightMobileUI = 896;
const widthMobileUI = 414;

export const wp = (width: number) => {
  return (Dimensions.get('window').width * width) / widthMobileUI;
};

export const hp = (height: number) => {
  return (Dimensions.get('window').height * height) / heightMobileUI;
};
