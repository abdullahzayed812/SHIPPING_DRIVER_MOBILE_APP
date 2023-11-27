import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  HORIZONTAL_SPACING,
  VERTICAL_SPACING,
} from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  invoiceListItem: globalStyle.flatListComponentStyle,
  buttonStyle: {
    ...globalStyle.smallButtonRadius,
    paddingRight: 0,
  },
  buttonTitleStyle: {
    ...globalStyle.smallButtonRadiusTitle,
    alignSelf: 'center',
  },
  row: globalStyle.row,
  rowText: {
    ...globalStyle.normalText,
    ...globalStyle.rowText,
  },
  textValue: {
    color: colors.mainColor,
  },
});
