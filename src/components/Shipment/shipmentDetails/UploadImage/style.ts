import { StyleSheet } from 'react-native';
import { BUTTON_WIDTH, VERTICAL_SPACING } from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { calcHeight } from '../../../../helpers/sizes';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  canceledOrder: {
    ...globalStyle.directionBetween,
    marginVertical: VERTICAL_SPACING,
  },
  cancelOrderBtn: {
    width: BUTTON_WIDTH - 20,
  },
  inputContainerStyle: {
    height: calcHeight(100),
  },
  cancelText: {
    ...globalStyle.text,
    color: colors.mainColor,
  },
});
