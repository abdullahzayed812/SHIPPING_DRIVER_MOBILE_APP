import { StyleSheet } from 'react-native';
import {
  BUTTON_WIDTH,
  HORIZONTAL_SPACING,
  MAIN_PADDING,
  MAX_BUTTON_HEIGHT,
  MIN_BUTTON_HEIGHT,
  SMALL_IMAGE_SIZE,
  VERTICAL_SPACING,
} from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';
import { calcWidth } from '../../../helpers/sizes';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  modalOverlay: globalStyle.overlay,
  modalContent: globalStyle.signatureBox,
  moveModalUp: {
    ...globalStyle.signatureBox,
    marginTop: VERTICAL_SPACING,
  },
  closeModal: {
    width: calcWidth(100),
    padding: MAIN_PADDING,
  },
  imgBox: {
    paddingRight: MAIN_PADDING / 5,
    alignItems: 'flex-end',
  },
  closeImg: {
    width: SMALL_IMAGE_SIZE,
    height: SMALL_IMAGE_SIZE,
    alignSelf: 'flex-end',
  },
  modalBox: {
    alignItems: 'center',
  },
  modalTitle: globalStyle.text,
  inputBox: globalStyle.signatureInputBox,
  input: globalStyle.signatureInput,
  modalButtonStyle: globalStyle.signatureButton,
  resetText: {
    ...globalStyle.normalText,
    ...globalStyle.resetText,
  },
  buttonStyle: {
    width: BUTTON_WIDTH,
    height: MIN_BUTTON_HEIGHT - 3,
    marginTop: VERTICAL_SPACING / 2,
  },
  buttonTitleStyle: globalStyle.normalText,
  buttonOutlineStyle: {
    borderColor: colors.darkColor,
    color: colors.darkColor,
  },
  lightText: {
    ...globalStyle.normalText,
    marginBottom: VERTICAL_SPACING - 8,
    color: colors.paraColor,
  },
  rowTextBox: {
    paddingHorizontal: HORIZONTAL_SPACING * 2.5,
  },
  shipmentDetialsBox: {
    alignSelf: 'flex-start',
    paddingHorizontal: HORIZONTAL_SPACING * 2.5,
  },
  doneButtonStyle: {
    width: BUTTON_WIDTH,
    height: MAX_BUTTON_HEIGHT,
    alignSelf: 'center',
    marginTop: VERTICAL_SPACING / 2,
  },
});
