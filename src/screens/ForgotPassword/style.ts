import { StyleSheet } from 'react-native';
import { VERTICAL_SPACING } from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: globalStyle.pageContainer,
  pageTitle: {
    marginBottom: VERTICAL_SPACING / 2,
  },
  resetText: {
    ...globalStyle.normalText,
    marginBottom: VERTICAL_SPACING * 2,
    color: colors.lightGreen,
  },
  buttonStyle: {
    marginVertical: VERTICAL_SPACING + 10,
  },
  haveAProblemText: {
    textAlign: 'center',
    ...globalStyle.normalText,
    color: colors.lightGreen,
  },
  resendText: {
    textDecorationLine: 'underline',
    textDecorationColor: colors.mainColor,
    color: colors.mainColor,
  },
});
