import { StyleSheet } from 'react-native';
import { VERTICAL_SPACING } from '../../../constants/spacing';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  drsItemHeaderText: {
    ...globalStyle.normalText,
  },
  line: {
    ...globalStyle.line,
    marginVertical: VERTICAL_SPACING / 2,
    height: 1,
  },
});
