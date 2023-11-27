import { StyleSheet } from 'react-native';
import { BORDER_WIDTH } from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: globalStyle.pageContainer,

  inputContainerStyle: {
    borderWidth: BORDER_WIDTH,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
  },
  emptyListImg: globalStyle.emptyListImg,
});
