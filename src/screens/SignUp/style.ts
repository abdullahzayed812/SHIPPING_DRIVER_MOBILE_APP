import { StyleSheet } from 'react-native';
import {
  MIN_BUTTON_HEIGHT,
  MAIN_PADDING,
  VERTICAL_SPACING,
} from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { calcFont } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  signUpBox: {
    ...globalStyle.curveBox,
    paddingTop: MAIN_PADDING * 2,
  },
  signUpText: {
    ...globalStyle.text,
    fontSize: calcFont(16),
    letterSpacing: 0.6,
    marginVertical: VERTICAL_SPACING / 2,
    color: colors.paraColor,
  },
  buttonStyle: {
    height: MIN_BUTTON_HEIGHT,
  },
  buttonTitle: {
    color: colors.mainColor,
  },
});
