import { StyleSheet } from 'react-native';
import {
  BUTTON_WIDTH,
  HORIZONTAL_SPACING,
  MIN_BUTTON_HEIGHT,
  VERTICAL_SPACING,
} from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: globalStyle.pageContainer,
  signatureBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: VERTICAL_SPACING,
  },
  signatureTextBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signatureText: {
    ...globalStyle.normalText,
    marginRight: HORIZONTAL_SPACING / 3,
  },
  buttonStyle: {
    height: MIN_BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    backgroundColor: colors.darkColor,
  },
  buttonTitleStyle: {
    color: colors.white,
  },
  emptyListImg: globalStyle.emptyListImg,
});
