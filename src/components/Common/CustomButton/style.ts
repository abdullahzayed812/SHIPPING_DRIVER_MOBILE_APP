import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  HORIZONTAL_SPACING,
  MAIN_PADDING,
  MAX_BUTTON_HEIGHT,
  MEDIUM_IMAGE_SIZE,
  SMALL_IMAGE_SIZE,
} from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  button: {
    height: MAX_BUTTON_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    backgroundColor: colors.mainColor,
  },
  outline: {
    backgroundColor: colors.white,
    borderWidth: BORDER_WIDTH,
    borderColor: colors.mainColor,
  },
  title: {
    ...globalStyle.text,
    color: colors.white,
  },
  outlineColor: {
    color: colors.mainColor,
  },
  img: {
    width: SMALL_IMAGE_SIZE + 5,
    height: SMALL_IMAGE_SIZE + 5,
  },
  scanImg: {
    marginRight: HORIZONTAL_SPACING / 4,
  },
  withImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: MAIN_PADDING / 2,
  },
  sortByLocationImg: {
    width: MEDIUM_IMAGE_SIZE,
    height: SMALL_IMAGE_SIZE + 6,
    marginLeft: 1,
  },
});
