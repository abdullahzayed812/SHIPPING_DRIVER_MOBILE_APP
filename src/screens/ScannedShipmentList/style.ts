import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  MAIN_PADDING,
  VERTICAL_SPACING,
} from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { calcWidth } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyle.pageContainer,
    paddingTop: MAIN_PADDING * 5,
    padding: MAIN_PADDING,
  },
  awbBox: {
    paddingHorizontal: MAIN_PADDING,
    paddingVertical: MAIN_PADDING / 2,
    marginBottom: VERTICAL_SPACING / 2,
    borderWidth: BORDER_WIDTH,
    borderRadius: BORDER_RADIUS,
    borderColor: colors.mainColor,
    backgroundColor: colors.lightMainColor,
  },
  awbText: globalStyle.text,
  buttonStyle: {
    width: calcWidth(250),
    marginTop: VERTICAL_SPACING,
  },
});
