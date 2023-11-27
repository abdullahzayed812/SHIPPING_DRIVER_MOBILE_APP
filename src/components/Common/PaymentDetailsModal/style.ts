import { StyleSheet } from 'react-native';
import {
  BORDER_WIDTH,
  BUTTON_WIDTH,
  FULL_WIDTH,
  MAIN_PADDING,
  MIN_BUTTON_HEIGHT,
  VERTICAL_SPACING,
} from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';
import { calcHeight, calcWidth } from '../../../helpers/sizes';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBox: {
    width: FULL_WIDTH - 50,
    paddingHorizontal: MAIN_PADDING,
    paddingVertical: MAIN_PADDING * 2,
    borderWidth: BORDER_WIDTH,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
  },
  modalTitle: {
    textAlign: 'center',
    marginBottom: VERTICAL_SPACING,
  },
  buttonsBox: {
    ...globalStyle.directionBetween,
    justifyContent: 'space-around',
    marginBottom: VERTICAL_SPACING,
  },
  buttonStyle: {
    width: calcWidth(100),
    height: MIN_BUTTON_HEIGHT,
  },
  spcificWidth: {
    width: calcWidth(150),
  },
  grayButton: {
    alignSelf: 'center',
    backgroundColor: colors.gray,
  },
});
