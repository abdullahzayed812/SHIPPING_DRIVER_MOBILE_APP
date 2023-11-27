import { StyleSheet } from 'react-native';
import { BUTTON_WIDTH, VERTICAL_SPACING } from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';

export const styles = StyleSheet.create({
  buttonsBox: {
    flexDirection: 'row',
    marginTop: VERTICAL_SPACING / 2,
    marginBottom: VERTICAL_SPACING - 5,
  },
  buttonStyle: {
    width: BUTTON_WIDTH,
  },
  pickupActive: {
    backgroundColor: colors.mainColor,
    color: colors.white,
  },
  pickupUnactive: {
    backgroundColor: colors.lightGray,
    color: colors.paraColor,
  },
});
