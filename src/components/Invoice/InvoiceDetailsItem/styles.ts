import { StyleSheet } from 'react-native';
import {
  HORIZONTAL_SPACING,
  VERTICAL_SPACING,
} from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  invoiceDetailsItem: {
    ...globalStyle.flatListComponentStyle,
    paddingVertical: VERTICAL_SPACING,
    paddingHorizontal: HORIZONTAL_SPACING,
  },
  buttonTitleStyle: globalStyle.smallButtonRadiusTitle,
  row: { ...globalStyle.row, marginBottom: VERTICAL_SPACING / 2 },
  rowText: {
    ...globalStyle.normalText,
    ...globalStyle.rowText,
  },
  textValue: {
    color: colors.mainColor,
  },
});
