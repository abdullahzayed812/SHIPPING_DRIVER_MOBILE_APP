import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  BUTTON_WIDTH,
  MAIN_PADDING,
  MIN_BUTTON_HEIGHT,
  VERTICAL_SPACING,
} from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { calcWidth } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: globalStyle.pageContainer,
  center: {
    alignItems: 'center',
    marginTop: VERTICAL_SPACING * 3,
    marginBottom: VERTICAL_SPACING * 2,
  },
  buttonStyle: {
    height: MIN_BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    marginTop: VERTICAL_SPACING * 2,
  },
  line: globalStyle.line,
  scanTextBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: VERTICAL_SPACING,
  },
  imageBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scanTextValue: {
    textDecorationLine: 'underline',
    textDecorationColor: colors.blue,
    color: colors.blue,
  },
  textBox: {
    justifyContent: 'center',
  },
  rowText: {
    color: colors.lightGreen,
  },
  awbContainer: {
    alignItems: 'center',
  },
  awbBox: {
    width: calcWidth(300),
    borderRadius: BORDER_RADIUS,
    marginVertical: VERTICAL_SPACING * 4,
    backgroundColor: '#ff98007a',
    padding: MAIN_PADDING,
  },
  tryAgainColor: {
    backgroundColor: colors.darkColor,
  },
  awbText: {
    color: colors.white,
  },
  awbButton: {
    width: calcWidth(250),
    marginBottom: VERTICAL_SPACING / 2,
  },
});
