import { StyleSheet } from 'react-native';
import { VERTICAL_SPACING } from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  shipmentReasonText: {
    ...globalStyle.text,
    textAlign: 'center',
    marginVertical: VERTICAL_SPACING / 2,
    color: colors.red,
  },
});
