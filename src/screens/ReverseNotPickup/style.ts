import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  MAIN_PADDING,
  VERTICAL_SPACING,
} from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { calcHeight, calcWidth } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyle.pageContainer,
    paddingTop: calcHeight(300),
  },
  subStatusBox: {
    padding: MAIN_PADDING / 2,
    borderWidth: BORDER_WIDTH,
    borderColor: colors.mainColor,
    borderRadius: BORDER_RADIUS,
    marginVertical: VERTICAL_SPACING,
    backgroundColor: colors.lightGray,
  },
  inputContainerStyle: {
    height: calcHeight(100),
    marginVertical: VERTICAL_SPACING,
  },
  buttonStyle: {
    width: calcWidth(120),
    alignSelf: 'center',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
  },
  modalBox: {
    top: calcHeight(400),
    width: calcWidth(400),
    padding: MAIN_PADDING,
    borderRadius: BORDER_RADIUS,
    backgroundColor: colors.lightGray,
  },
  modalText: {
    color: colors.lightGreen,
  },
  underline: {
    ...globalStyle.line,
    marginTop: VERTICAL_SPACING / 2,
    marginBottom: VERTICAL_SPACING,
  },
});
