import { StyleSheet } from 'react-native';
import { BUTTON_WIDTH, MIN_BUTTON_HEIGHT } from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { calcHeight, calcWidth } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  langBox: globalStyle.curveBox,
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyle: {
    width: BUTTON_WIDTH - 8,
    height: MIN_BUTTON_HEIGHT,
  },
  buttonTitle: {
    color: colors.mainColor,
  },
  nextBox: {
    alignItems: 'center',
    marginTop: calcHeight(30),
  },
  nextImgBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: calcWidth(50),
    height: calcHeight(50),
    borderRadius: calcWidth(150) / 2,
    backgroundColor: colors.mainColor,
  },
});
