import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  HORIZONTAL_SPACING,
  MAIN_PADDING,
  VERTICAL_SPACING,
} from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  pickupListItemBox: globalStyle.flatListComponentStyle,
  buttonStyle: globalStyle.smallButtonRadius,
  buttonTitleStyle: globalStyle.smallButtonRadiusTitle,
  row: globalStyle.row,
  rowText: {
    ...globalStyle.normalText,
    ...globalStyle.rowText,
  },
  textValue: {
    color: colors.mainColor,
  },
});
