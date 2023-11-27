import { StyleSheet } from 'react-native';
import {
  HORIZONTAL_SPACING,
  VERTICAL_SPACING,
} from '../../../constants/spacing';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  numberBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: VERTICAL_SPACING - 5,
  },
  number: {
    ...globalStyle.normalText,
    marginLeft: HORIZONTAL_SPACING / 4,
  },
});
