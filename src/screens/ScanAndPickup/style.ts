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
    paddingTop: calcHeight(200),
  },
  awbBox: {
    padding: MAIN_PADDING,
    borderWidth: BORDER_WIDTH,
    borderRadius: BORDER_RADIUS,
    borderColor: colors.mainColor,
    backgroundColor: colors.lightGray,
  },
  tryAgainButton: {
    width: calcWidth(200),
    alignSelf: 'center',
    marginVertical: VERTICAL_SPACING,
  },
  awbText: {
    color: colors.lightGreen,
  },
  buttonBox: {
    ...globalStyle.directionBetween,
    justifyContent: 'space-around',
  },
  buttonStyle: {
    width: calcWidth(150),
  },
});
