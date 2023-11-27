import { StyleSheet } from 'react-native';
import {
  MAIN_PADDING,
  VERTICAL_SPACING,
  SQUARE_BUTTON_SIZE,
  BORDER_RADIUS,
} from '../../constants/spacing';
import { calcFont, calcWidth } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyle.pageContainer,
    alignItems: 'center',
  },
  subTitle: {
    ...globalStyle.text,
    marginTop: VERTICAL_SPACING * 2,
    padding: MAIN_PADDING / 2,
  },
  text: {
    ...globalStyle.normalText,
    fontSize: calcFont(16),
    textAlign: 'center',
  },
  image: {
    width: calcWidth(100),
    height: calcWidth(100),
    marginVertical: VERTICAL_SPACING + 3,
  },
  buttonStyle: {
    width: SQUARE_BUTTON_SIZE,
    height: SQUARE_BUTTON_SIZE,
    marginBottom: VERTICAL_SPACING / 2,
    borderRadius: BORDER_RADIUS,
  },
  scanImageStyle: {
    width: calcWidth(60),
    height: calcWidth(60),
  },
  scanButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    marginBottom: VERTICAL_SPACING,
  },
});
