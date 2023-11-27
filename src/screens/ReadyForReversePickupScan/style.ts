import { StyleSheet } from 'react-native';
import {
  BUTTON_WIDTH,
  LARGE_IMAGE_SIZE,
  MIN_BUTTON_HEIGHT,
  VERTICAL_SPACING,
} from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { calcWidth } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyle.pageContainer,
    alignItems: 'center',
  },
  image: {
    marginTop: VERTICAL_SPACING * 8,
    marginBottom: VERTICAL_SPACING * 2,
  },
  buttonStyle: {
    width: BUTTON_WIDTH * 1.5,
    height: MIN_BUTTON_HEIGHT,
    marginBottom: VERTICAL_SPACING / 2,
  },
  locationBox: {
    width: calcWidth(250),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: VERTICAL_SPACING * 3,
  },
  locationImage: {
    width: LARGE_IMAGE_SIZE,
    height: LARGE_IMAGE_SIZE,
  },
});
