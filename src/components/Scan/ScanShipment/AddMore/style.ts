import { StyleSheet } from 'react-native';
import { FULL_HEIGHT, FULL_WIDTH } from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: globalStyle.pageContainer,
  addMoreBox: {
    width: FULL_WIDTH * 0.8,
    height: FULL_HEIGHT * 0.3,
    marginTop: FULL_HEIGHT * 0.1,
    borderColor: colors.darkColor,
    borderWidth: 1,
    borderRadius: FULL_WIDTH * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addMoreButtonStyle: {
    width: FULL_WIDTH * 0.6,
    marginVertical: FULL_HEIGHT * 0.02,
    backgroundColor: colors.darkColor,
  },
  addMoreButtonTitleStyle: {
    fontSize: 18,
    width: FULL_WIDTH * 0.8,
    textAlign: 'center',
    color: colors.white,
  },
  addButtonStyle: {
    width: FULL_WIDTH * 0.6,
    marginVertical: FULL_HEIGHT * 0.02,
    backgroundColor: colors.darkColor,
  },
  addButtonTitleStyle: {
    fontSize: 18,
    width: FULL_WIDTH * 0.8,
    textAlign: 'center',
    color: colors.white,
  },
});
