import { StyleSheet } from 'react-native';
import {
  BORDER_WIDTH,
  HORIZONTAL_SPACING,
  MAIN_PADDING,
} from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';
import { calcHeight, calcWidth } from '../../../helpers/sizes';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  headerBox: {
    ...globalStyle.directionBetween,
    justifyContent: 'flex-start',
    width: calcWidth(428),
    height: calcHeight(100),
    paddingHorizontal: MAIN_PADDING + 15,
    borderBottomWidth: BORDER_WIDTH - 1,
    borderBottomColor: colors.lightGray,
    backgroundColor: colors.white,
  },
  headerBack: {},
  headerLogo: {
    width: calcWidth(158),
    height: calcWidth(58),
    marginLeft: HORIZONTAL_SPACING * 4,
  },
});
