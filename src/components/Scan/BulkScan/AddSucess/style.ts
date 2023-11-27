import { I18nManager, StyleSheet } from 'react-native';
import { FULL_HEIGHT, FULL_WIDTH } from '../../../../constants/spacing';
import { colors } from '../../../../helpers/colors';
import { calcWidth } from '../../../../helpers/sizes';

export const styles = StyleSheet.create({
  successAllContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: FULL_WIDTH * 0.9,
    //backgroundColor: 'red',
  },
  successAllTitle: {
    fontSize: I18nManager.isRTL ? calcWidth(17) : FULL_WIDTH * 0.037,
    fontWeight: 'bold',
    color: 'green',
    paddingBottom: 30,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: colors.lightGray,
    width: FULL_WIDTH * 0.5,
    height: FULL_HEIGHT * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
});
