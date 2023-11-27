import { I18nManager, StyleSheet } from 'react-native';
import { FULL_HEIGHT, FULL_WIDTH } from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { calcWidth } from '../../../../helpers/sizes';

export const styles = StyleSheet.create({
  successContainer: {
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.mainColor,
    marginBottom: 15,
  },
  successAllTitle: {
    fontSize: I18nManager.isRTL ? calcWidth(17) : FULL_WIDTH * 0.037,
    fontWeight: 'bold',
    color: 'green',
    paddingBottom: 30,
  },
  notAddMessageText: {
    fontSize: I18nManager.isRTL ? 18 : 21,
    color: 'red',
  },
  successItemView: {
    width: FULL_WIDTH * 0.8,
    height: FULL_HEIGHT * 0.16,
    backgroundColor: colors.lightGray,
    borderColor: colors.mainColor,
    borderWidth: 1.5,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  successItemText: {
    fontSize: 18,
    color: colors.mainColor,
    marginBottom: 8,
  },
  successItemError: {
    fontSize: 14,
    color: 'red',
  },
});
