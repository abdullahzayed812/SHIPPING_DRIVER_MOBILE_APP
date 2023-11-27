import { StyleSheet } from 'react-native';
import { MEDIUM_IMAGE_SIZE, VERTICAL_SPACING } from '../../constants/spacing';
import { globalStyle } from '../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  container: globalStyle.pageContainer,
  avatarImg: {
    width: MEDIUM_IMAGE_SIZE * 5,
    height: MEDIUM_IMAGE_SIZE * 5,
    borderRadius: (MEDIUM_IMAGE_SIZE * 5) / 2,
  },
  avatarImgBox: {
    alignSelf: 'center',
    marginVertical: VERTICAL_SPACING + 5,
    width: MEDIUM_IMAGE_SIZE * 5,
    height: MEDIUM_IMAGE_SIZE * 5,
    borderRadius: (MEDIUM_IMAGE_SIZE * 5) / 2,
  },
  changeImageBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .7)',
  },
  editProfileImage: {
    width: MEDIUM_IMAGE_SIZE,
    height: MEDIUM_IMAGE_SIZE,
  },
});
