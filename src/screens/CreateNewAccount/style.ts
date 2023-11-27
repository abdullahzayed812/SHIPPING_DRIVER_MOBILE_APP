import { ImageBackgroundComponent, StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import {
  BORDER_RADIUS,
  HORIZONTAL_SPACING,
  INPUT_HEIGHT,
  LABEL_SPACING,
  MAIN_PADDING,
  SMALL_IMAGE_SIZE,
  VERTICAL_SPACING,
} from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { calcFont, calcHeight, calcWidth } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyle.pageContainer,
    height: 'auto',
    paddingBottom: MAIN_PADDING,
  },
  stepText: {
    ...globalStyle.normalText,
    ...globalStyle.stepText,
  },
  num1: globalStyle.number,
  pageTitle: {
    marginBottom: VERTICAL_SPACING / 2,
  },
  personalInfoText: {
    marginBottom: VERTICAL_SPACING,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainerStyle: {
    width: calcWidth(160),
  },
  image: {
    width: SMALL_IMAGE_SIZE,
    height: SMALL_IMAGE_SIZE,
  },
  branchesBox: {
    marginVertical: VERTICAL_SPACING,
  },
  branchesTitle: {
    ...globalStyle.normalText,
    marginBottom: VERTICAL_SPACING,
    color: colors.darkColor,
  },
  grayBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: INPUT_HEIGHT,
    paddingHorizontal: HORIZONTAL_SPACING / 2,
    borderRadius: BORDER_RADIUS,
    backgroundColor: colors.lightGray,
  },
  modalOverlay: globalStyle.overlay,
  modalContent: {
    ...globalStyle.signatureBox,
    padding: MAIN_PADDING,
    alignItems: 'center',
  },
  modalRow: {
    width: calcWidth(354),
    alignItems: 'center',
    marginBottom: calcHeight(5),
  },
  selectedBranch: {
    color: colors.lightGreen,
  },
  modalText: globalStyle.text,
  errorMessage: {
    marginVertical: calcHeight(12),
    fontSize: calcFont(13),
    color: 'red',
  },
});
