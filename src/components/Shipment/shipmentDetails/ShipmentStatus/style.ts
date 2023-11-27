import { StyleSheet } from 'react-native';
import {
  BUTTON_WIDTH,
  MIN_BUTTON_HEIGHT,
  VERTICAL_SPACING,
} from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { calcHeight, calcWidth } from '../../../../helpers/sizes';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  textColor: {
    color: colors.mainColor,
  },
  line: {
    ...globalStyle.line,
    marginVertical: 0,
    marginBottom: VERTICAL_SPACING / 2,
    height: 1,
  },
  halfRow: {
    ...globalStyle.directionBetween,
    width: '70%',
  },
  buttonTitleStyle: {
    ...globalStyle.normalText,
    color: colors.mainColor,
  },
  borderColorGreen: {
    borderColor: colors.green,
  },
  borderColorRed: {
    borderColor: colors.red,
  },
  defaultoutline: {
    borderColor: colors.mainColor,
  },
  buttonStyle: {
    width: BUTTON_WIDTH + 10,
    height: MIN_BUTTON_HEIGHT - 6,
    marginBottom: calcHeight(10),
    marginLeft: calcWidth(10),
  },
  titleColorGreen: {
    color: colors.green,
  },
  titleColorRed: {
    color: colors.red,
  },
});
