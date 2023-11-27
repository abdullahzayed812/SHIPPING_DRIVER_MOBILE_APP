import { StyleSheet } from 'react-native';
import {
  HORIZONTAL_SPACING,
  VERTICAL_SPACING,
} from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { calcFont } from '../../../../helpers/sizes';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: VERTICAL_SPACING - 5,
  },
  img: {
    marginRight: HORIZONTAL_SPACING - 15,
  },
  text: {
    ...globalStyle.text,
    fontSize: calcFont(16),
  },
  normalText: globalStyle.normalText,
  extremeText: {
    ...globalStyle.normalText,
    textDecorationLine: 'underline',
    textDecorationColor: colors.blue,
    color: colors.blue,
  },
});
