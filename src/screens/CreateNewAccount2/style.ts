import { StyleSheet } from 'react-native';
import { HORIZONTAL_SPACING, VERTICAL_SPACING } from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { calcHeight, calcWidth } from '../../helpers/sizes';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: globalStyle.pageContainer,
  pageTitle: {
    marginBottom: 0,
  },
  uploadDoc: {
    ...globalStyle.normalText,
    marginVertical: VERTICAL_SPACING / 2,
  },
  profilePictureBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: VERTICAL_SPACING / 2,
  },
  uploadImageBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: calcWidth(130),
    height: calcHeight(100),
    marginRight: VERTICAL_SPACING,
    backgroundColor: colors.lightGray,
  },
  inputShape: globalStyle.inputShape,
  titleInputShape: {
    marginBottom: HORIZONTAL_SPACING / 2,
  },
  profilePhoto: {
    width: calcWidth(100),
    height: calcWidth(80),
  },
  profileText: globalStyle.normalText,
  uploadedImage: {
    width: calcWidth(30),
    height: calcWidth(30),
  },
  iconImage: {
    position: 'absolute',
    right: VERTICAL_SPACING / 2,
    width: calcWidth(13),
    height: calcWidth(23),
    marginLeft: VERTICAL_SPACING / 2,
  },
  errorMessage: {
    ...globalStyle.normalText,
    marginBottom: VERTICAL_SPACING,
    color: colors.red,
  },
  marginBottom: {
    marginBottom: VERTICAL_SPACING * 2,
  },
});
