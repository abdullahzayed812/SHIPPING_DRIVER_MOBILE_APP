import { StyleSheet } from 'react-native';
import { VERTICAL_SPACING } from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  shipmentNotFoundText: {
    ...globalStyle.text,
    textAlign: 'center',
    marginTop: VERTICAL_SPACING * 15,
    marginBottom: VERTICAL_SPACING,
    color: colors.red,
  },
  buttonStyle: {
    ...globalStyle.signatureButton,
    alignSelf: 'center',
  },
});
