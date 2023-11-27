import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const calcWidth = (pixels: number) => {
  return widthPercentageToDP((pixels / 428) * 100);
};
const calcHeight = (pixels: number) => {
  return heightPercentageToDP((pixels / 926) * 100);
};

export { calcWidth, calcHeight, calcWidth as calcFont };
