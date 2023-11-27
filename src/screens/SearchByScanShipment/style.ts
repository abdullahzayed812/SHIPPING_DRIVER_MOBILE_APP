import { StyleSheet } from 'react-native';
import { VERTICAL_SPACING } from '../../constants/spacing';
import { calcWidth } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyle.pageContainer,
    alignItems: 'center',
  },
  barcodeImg: {
    width: calcWidth(200),
    height: calcWidth(200),
    marginTop: VERTICAL_SPACING * 3,
  },
  buttonStyle: {
    width: calcWidth(200),
    marginVertical: VERTICAL_SPACING * 2,
  },
});
