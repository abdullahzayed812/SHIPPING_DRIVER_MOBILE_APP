import { StyleSheet } from 'react-native';
import { BORDER_WIDTH, VERTICAL_SPACING } from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { calcHeight, calcWidth } from '../../../../helpers/sizes';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  signatureText: {
    ...globalStyle.text,
    marginTop: VERTICAL_SPACING * 3 + 10,
    marginBottom: VERTICAL_SPACING,
  },
  inputBox: {
    alignItems: 'flex-start',
    width: calcWidth(300),
    height: calcHeight(450),
    borderWidth: BORDER_WIDTH,
    borderColor: colors.mainColor,
    backgroundColor: colors.white,
  },
  buttonStyle: globalStyle.signatureButton,
});
