import { StyleSheet } from 'react-native';
import { VERTICAL_SPACING } from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  textColor: {
    color: colors.mainColor,
  },
  line: {
    ...globalStyle.line,
    marginVertical: 0,
    marginBottom: VERTICAL_SPACING / 2,
    height: 1,
  },
  row: globalStyle.directionBetween,
});
