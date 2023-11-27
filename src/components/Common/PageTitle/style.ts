import { StyleSheet } from 'react-native';
import { VERTICAL_SPACING } from '../../../constants/spacing';
import { calcFont } from '../../../helpers/sizes';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  titleWrapper: {
    marginVertical: VERTICAL_SPACING,
  },
  title: {
    ...globalStyle.text,
    fontSize: calcFont(24),
  },
});
