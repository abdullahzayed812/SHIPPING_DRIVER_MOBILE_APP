import { StyleSheet } from 'react-native';
import { MAIN_PADDING, VERTICAL_SPACING } from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  pickupShipmentBox: globalStyle.flatListItem,
  buttonStyle: globalStyle.smallButtonRadius,
  buttonTitleStyle: globalStyle.smallButtonRadiusTitle,
  textBox: {
    paddingHorizontal: MAIN_PADDING,
    paddingVertical: MAIN_PADDING - 6,
  },
  textValue: {
    ...globalStyle.normalText,
    color: colors.mainColor,
  },
  row: {
    ...globalStyle.row,
    marginTop: VERTICAL_SPACING / 3,
  },
  rowText: globalStyle.rowText,
  readyToPickupButtonStyle: {
    backgroundColor: colors.mainColor,
  },
  pickupStyle: {
    backgroundColor: colors.darkColor,
  },
});
