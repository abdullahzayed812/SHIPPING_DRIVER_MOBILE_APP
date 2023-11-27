import { I18nManager, StyleSheet } from 'react-native';
import {
  BORDER_WIDTH,
  FULL_HEIGHT,
  FULL_WIDTH,
  VERTICAL_SPACING,
} from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { calcHeight, calcWidth } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyle.pageContainer,
    alignItems: 'center',
  },
  shipmentNotFoundText: {
    ...globalStyle.text,
    textAlign: 'center',
    marginTop: VERTICAL_SPACING * 15,
    marginBottom: VERTICAL_SPACING,
    color: colors.red,
  },
  signatureText: {
    ...globalStyle.text,
    marginTop: VERTICAL_SPACING * 3 + 10,
    marginBottom: VERTICAL_SPACING,
  },
  inputBox: {
    alignItems: 'flex-start',
    width: calcWidth(300),
    height: calcHeight(450),
    borderWidth: BORDER_WIDTH,
    borderColor: colors.mainColor,
    backgroundColor: colors.white,
  },
  input: globalStyle.signatureInput,
  buttonStyle: globalStyle.signatureButton,
  resetText: {
    ...globalStyle.normalText,
    ...globalStyle.resetText,
  },
  successAllContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: FULL_WIDTH * 0.9,
    //backgroundColor: 'red',
  },
  successAllTitle: {
    fontSize: I18nManager.isRTL ? calcWidth(17) : FULL_WIDTH * 0.037,
    fontWeight: 'bold',
    color: 'green',
    paddingBottom: 30,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: colors.lightGray,
    width: FULL_WIDTH * 0.5,
    height: FULL_HEIGHT * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
  successContainer: {
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.mainColor,
    marginBottom: 15,
  },
  notAddMessageText: {
    fontSize: I18nManager.isRTL ? 18 : 21,
    color: 'red',
  },
  successItemView: {
    width: FULL_WIDTH * 0.8,
    height: FULL_HEIGHT * 0.16,
    backgroundColor: colors.lightGray,
    borderColor: colors.mainColor,
    borderWidth: 1.5,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  successItemText: {
    fontSize: 18,
    color: colors.mainColor,
    marginBottom: 8,
  },
  successItemError: {
    fontSize: 14,
    color: 'red',
  },
});
