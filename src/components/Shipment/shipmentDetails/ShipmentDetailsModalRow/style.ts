import { StyleSheet } from 'react-native';
import { BORDER_WIDTH, VERTICAL_SPACING } from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { calcFont, calcWidth } from '../../../../helpers/sizes';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  textBox: {
    width: calcWidth(260),
    paddingVertical: VERTICAL_SPACING / 4,
    borderBottomWidth: BORDER_WIDTH - 1,
    borderBottomColor: colors.lightGray,
  },
  text: {
    ...globalStyle.normalText,
    fontSize: calcFont(12),
    textAlign: 'left',
    color: colors.paraColor,
  },
});
