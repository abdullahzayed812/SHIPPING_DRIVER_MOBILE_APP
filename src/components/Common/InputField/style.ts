import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  HORIZONTAL_SPACING,
  LABEL_SPACING,
  MAIN_PADDING,
  MEDIUM_IMAGE_SIZE,
  VERTICAL_SPACING,
} from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';
import { calcHeight } from '../../../helpers/sizes';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  validationTooltip: {
    position: 'absolute',
    zIndex: 1,
    left: 20,
    bottom: -40,
    padding: MAIN_PADDING / 2,
    borderWidth: BORDER_WIDTH,
    borderRadius: BORDER_RADIUS,
    borderColor: colors.mainColor,
    backgroundColor: colors.white,
  },
  validationTooltipTriange: {
    position: 'absolute',
    top: -20,
    left: 20,
    borderWidth: 10,
    borderBottomColor: colors.mainColor,
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
  },
  validationTooltipText: {
    color: 'black',
  },
  label: {
    ...globalStyle.normalText,
    marginBottom: LABEL_SPACING,
    color: colors.darkColor,
  },
  inputContainer: globalStyle.inputShape,
  input: {
    flex: 1,
    color: 'black',
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: MAIN_PADDING / 2,
    marginRight: HORIZONTAL_SPACING / 2,
    borderRightWidth: BORDER_WIDTH - 1,
    borderRightColor: colors.lightGreen,
  },
  leftImg: {
    width: MEDIUM_IMAGE_SIZE,
    height: MEDIUM_IMAGE_SIZE,
  },
  rightImg: {
    width: MEDIUM_IMAGE_SIZE - 8,
    height: MEDIUM_IMAGE_SIZE - 8,
  },
  marginTop: {
    marginTop: VERTICAL_SPACING,
  },
});
