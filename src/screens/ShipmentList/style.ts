import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  BUTTON_WIDTH,
  MIN_BUTTON_HEIGHT,
  VERTICAL_SPACING,
} from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { calcHeight, calcWidth } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: globalStyle.pageContainer,
  inputContainerStyle: {
    borderWidth: BORDER_WIDTH,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: VERTICAL_SPACING - 5,
  },
  buttonStyle: {
    flexDirection: 'row',
    width: BUTTON_WIDTH,
    height: MIN_BUTTON_HEIGHT,
    backgroundColor: colors.darkColor,
  },
  outlineButtonStyle: {
    color: colors.lightGreen,
    borderColor: colors.darkColor,
  },
  emptyListImg: globalStyle.emptyListImg,
  searchModalBox: {
    width: calcWidth(150),
    top: calcHeight(230),
    left: calcWidth(30),
    backgroundColor: colors.lightGray,
    padding: 4,
    borderRadius: BORDER_RADIUS,
  },
  searchModalText: {
    ...globalStyle.normalText,
    textAlign: 'center',
    borderWidth: BORDER_WIDTH,
    borderColor: colors.mainColor,
    borderRadius: BORDER_RADIUS,
    padding: 4,
    marginBottom: calcHeight(4),
  },
});
