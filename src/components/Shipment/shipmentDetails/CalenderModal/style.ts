import { StyleSheet } from 'react-native';
import {
  BORDER_WIDTH,
  FULL_WIDTH,
  MAIN_PADDING,
  MIN_BUTTON_HEIGHT,
  VERTICAL_SPACING,
} from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  calenderWrapper: {
    position: 'absolute',
    bottom: 50,
    width: FULL_WIDTH,
    paddingVertical: MAIN_PADDING,
    borderWidth: BORDER_WIDTH,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
  },
  calenderBtnBox: {
    ...globalStyle.directionBetween,
    paddingHorizontal: MAIN_PADDING,
    marginTop: VERTICAL_SPACING,
  },
  calenderBtn: {
    height: MIN_BUTTON_HEIGHT,
    paddingHorizontal: MAIN_PADDING,
  },
});
