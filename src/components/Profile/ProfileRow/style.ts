import { StyleSheet } from 'react-native';
import {
  HORIZONTAL_SPACING,
  MEDIUM_IMAGE_SIZE,
  VERTICAL_SPACING,
} from '../../../constants/spacing';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  profileRowBox: {
    marginBottom: VERTICAL_SPACING,
  },
  profileRowUpper: globalStyle.directionBetween,
  profileRowTitle: globalStyle.directionBetween,
  profileRowTitleText: globalStyle.text,
  profileRowName: {
    ...globalStyle.normalText,
    marginLeft: HORIZONTAL_SPACING + 20,
  },
  img: {
    width: MEDIUM_IMAGE_SIZE,
    height: MEDIUM_IMAGE_SIZE,
    marginRight: HORIZONTAL_SPACING - 5,
    padding: 10,
  },
});
