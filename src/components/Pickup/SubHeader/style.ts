import { StyleSheet } from 'react-native';
import {
  HORIZONTAL_SPACING,
  MAIN_PADDING,
  MEDIUM_IMAGE_SIZE,
  MIN_BUTTON_HEIGHT,
  VERTICAL_SPACING,
} from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  subHeaderBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: MAIN_PADDING,
    backgroundColor: colors.lightGray,
  },
  subHeaderText: globalStyle.normalText,
  subHeaderTextValue: {
    color: colors.mainColor,
  },
  text: {
    ...globalStyle.normalText,
    padding: MAIN_PADDING - 4,
    marginBottom: VERTICAL_SPACING,
  },
  buttonStyle: {
    height: MIN_BUTTON_HEIGHT,
    paddingHorizontal: HORIZONTAL_SPACING,
    marginTop: VERTICAL_SPACING / 2,
  },
  buttonTitleStyle: globalStyle.normalText,
  mapIconBox: {
    marginLeft: HORIZONTAL_SPACING,
    paddingHorizontal: MAIN_PADDING,
  },
  mapIconStyle: {
    width: MEDIUM_IMAGE_SIZE,
    height: MEDIUM_IMAGE_SIZE,
  },
});
