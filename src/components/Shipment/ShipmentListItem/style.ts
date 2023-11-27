import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  MAIN_PADDING,
  VERTICAL_SPACING,
} from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';
import { calcFont } from '../../../helpers/sizes';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  pickupListItemBox: {
    marginBottom: VERTICAL_SPACING / 2,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
  curvedPart: globalStyle.smallButtonRadius,
  curvedPartText: {
    fontSize: calcFont(12),
    fontWeight: 'bold',
    color: colors.white,
  },
  textBox: {
    paddingVertical: MAIN_PADDING - 5,
    paddingHorizontal: MAIN_PADDING + 10,
  },
  row: globalStyle.row,
  rowText: {
    ...globalStyle.normalText,
    ...globalStyle.rowText,
  },
  link: {
    ...globalStyle.normalText,
    color: colors.blue,
    textDecorationLine: 'underline',
    textDecorationColor: colors.blue,
  },
  textValue: {
    color: colors.mainColor,
  },
  deliveredStyle: {
    backgroundColor: colors.green,
  },
  notDeliveredStyle: {
    backgroundColor: colors.red,
  },
  running: {
    backgroundColor: colors.mainColor,
  },
  readyForReversePickup: {
    backgroundColor: colors.blue,
  },
});
