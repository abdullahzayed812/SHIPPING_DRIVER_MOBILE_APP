import { StyleSheet } from 'react-native';
import {
  FULL_HEIGHT,
  FULL_WIDTH,
  VERTICAL_SPACING,
} from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { calcHeight } from '../../../../helpers/sizes';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyle.pageContainer,
    paddingTop: calcHeight(150),
  },
  scannerText: {
    ...globalStyle.text,
    marginVertical: VERTICAL_SPACING,
    color: colors.mainColor,
  },
  scannerBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainerStyle: {
    width: FULL_WIDTH * 0.8,
    height: FULL_HEIGHT * 0.3,
    borderColor: colors.darkColor,
    borderWidth: 1,
    borderRadius: FULL_WIDTH * 0.03,
  },
});
