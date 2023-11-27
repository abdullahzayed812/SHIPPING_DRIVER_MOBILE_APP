import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  MAIN_PADDING,
  VERTICAL_SPACING,
} from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { calcHeight, calcWidth } from '../../../../helpers/sizes';

export const styles = StyleSheet.create({
  cashValue: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cashValueInput: {
    width: calcWidth(200),
  },
  cashValueText: {
    marginTop: calcHeight(10),
    marginRight: calcHeight(10),
  },
  newCodeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newCodeInput: {
    width: calcWidth(230),
  },
  newCodeBtn: {
    paddingHorizontal: MAIN_PADDING,
  },
  takePhoto: {
    alignItems: 'center',
    marginBottom: VERTICAL_SPACING,
  },
  imageBox: {
    width: calcWidth(230),
    height: calcHeight(100),
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS,
    backgroundColor: colors.lightGray,
  },
  uploadedImage: {
    width: calcWidth(90),
    height: calcWidth(90),
  },
  addNameBox: {
    padding: MAIN_PADDING,
    backgroundColor: colors.gray,
  },
  addNameTitle: {
    marginBottom: calcHeight(10),
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  addNameInput: {
    width: calcWidth(150),
  },
});
