import { StyleSheet } from 'react-native';
import { BUTTON_WIDTH, VERTICAL_SPACING } from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { calcHeight } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyle.pageContainer,
    paddingHorizontal: 0,
    backgroundColor: colors.lightGray,
  },
  updateShipmentBtn: {
    width: BUTTON_WIDTH * 2,
    alignSelf: 'center',
    marginBottom: VERTICAL_SPACING,
  },
  notDeliveredBox: {
    ...globalStyle.shipmentDetailsBox,
    marginTop: VERTICAL_SPACING,
    marginBottom: VERTICAL_SPACING * 3,
  },
  inputContainerStyle: {
    height: calcHeight(100),
  },
});
