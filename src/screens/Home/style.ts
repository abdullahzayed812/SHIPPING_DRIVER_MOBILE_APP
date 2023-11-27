import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  HORIZONTAL_SPACING,
  LARGE_IMAGE_SIZE,
  SMALL_IMAGE_SIZE,
  VERTICAL_SPACING,
} from '../../constants/spacing';
import { colors } from '../../helpers/colors';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  pageContainer: {
    ...globalStyle.pageContainer,
    paddingTop: VERTICAL_SPACING * 4,
  },
  userInfoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: VERTICAL_SPACING * 3,
  },
  welcomeText: {
    ...globalStyle.text,
    fontSize: 25,
    fontWeight: 'bold',
  },
  handImage: {
    fontSize: 25,
    marginLeft: 5,
  },
  userImage: {
    width: LARGE_IMAGE_SIZE + 30,
    height: LARGE_IMAGE_SIZE + 30,
    borderRadius: 40,
  },
  userInfo: {
    ...globalStyle.text,
    fontSize: 14,
    letterSpacing: 1.05,
  },
  editProfileImage: {
    width: SMALL_IMAGE_SIZE + 10,
    heihgt: SMALL_IMAGE_SIZE + 10,
    marginLeft: HORIZONTAL_SPACING,
  },
  boxsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: '45%',
    alignItems: 'center',
    marginVertical: VERTICAL_SPACING / 2,
    marginHorizontal: HORIZONTAL_SPACING / 2,
    paddingVertical: VERTICAL_SPACING,
    borderRadius: BORDER_RADIUS,
  },
  boxImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: LARGE_IMAGE_SIZE + 30,
    height: LARGE_IMAGE_SIZE + 30,
    borderRadius: 100,
    backgroundColor: colors.white,
  },
  boxImage: {
    width: LARGE_IMAGE_SIZE,
    height: LARGE_IMAGE_SIZE,
  },
  boxTitle: {
    ...globalStyle.text,
    marginTop: VERTICAL_SPACING,
    fontWeight: 'bold',
  },
});
