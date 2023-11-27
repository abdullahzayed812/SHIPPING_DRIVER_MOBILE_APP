import { StyleSheet } from 'react-native';
import { VERTICAL_SPACING } from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: globalStyle.pageContainer,
  buttonStyle: {
    marginBottom: VERTICAL_SPACING + 5,
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: VERTICAL_SPACING + 10,
  },
  text: globalStyle.text,
  forgotText: {
    ...globalStyle.text,
    textDecorationLine: 'underline',
    textDecorationColor: colors.darkColor,
  },
  rememberMe: {},
  forgot: {},
  makeAccount: {
    alignItems: 'center',
  },
  makeAccountText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.lightGreen,
  },
  signUpText: {
    textDecorationLine: 'underline',
    textDecorationColor: colors.mainColor,
    color: colors.mainColor,
  },
});
