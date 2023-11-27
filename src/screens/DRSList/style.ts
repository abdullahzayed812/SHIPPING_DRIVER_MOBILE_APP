import { StyleSheet } from 'react-native';
import { BORDER_WIDTH, VERTICAL_SPACING } from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: globalStyle.pageContainer,

  inputContainerStyle: {
    marginTop: VERTICAL_SPACING,
    borderWidth: BORDER_WIDTH - 1,
    borderColor: colors.lightGreen,
    backgroundColor: colors.white,
  },
  emptyListImg: globalStyle.emptyListImg,
});
