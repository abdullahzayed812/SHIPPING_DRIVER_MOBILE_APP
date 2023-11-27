import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Header } from '../../components/Common/Header';
import { ProfileRow } from '../../components/Profile/ProfileRow';
import { MEDIUM_IMAGE_SIZE } from '../../constants/spacing';
import { loadUserData } from '../../helpers/asyncStorage';
import { IMAGES } from '../../helpers/images';
import i18n from '../../helpers/language';
import { uploadImage } from '../../utils/global';
import { styles } from './style';

export const Profile: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string | undefined>('');
  const [name, setName] = useState<string>();

  const loadProfileData = async () => {
    const { name } = await loadUserData();
    setName(name);
  };

  useLayoutEffect(() => {
    loadProfileData();
  }, []);

  return (
    <>
      <Header
        backImageSource={IMAGES.leftArrow}
        logoImageSource={IMAGES.logo}
      />
      <View style={styles.container}>
        <View style={styles.avatarImgBox}>
          <Image
            source={profilePicture ? { uri: profilePicture } : IMAGES.userHome}
            style={styles.avatarImg}
          />
          <View style={styles.changeImageBox}>
            <TouchableOpacity onPress={() => uploadImage(setProfilePicture)}>
              <Image source={IMAGES.camera} style={styles.editProfileImage} />
            </TouchableOpacity>
          </View>
        </View>
        <ProfileRow
          leftImageSource={IMAGES.user}
          title={i18n.t('yourName')}
          rightImageSource={IMAGES.pinG}
          titleValue={name}
        />
        <ProfileRow
          leftImageSource={IMAGES.lock}
          title={i18n.t('password')}
          rightImageSource={IMAGES.pinG}
          titleValue="***********************"
          imageSize={{ height: MEDIUM_IMAGE_SIZE }}
        />
        <ProfileRow
          leftImageSource={IMAGES.language}
          title={i18n.t('language')}
          rightImageSource={IMAGES.pinG}
          titleValue="English"
          language
        />
        <ProfileRow
          leftImageSource={IMAGES.logOut}
          title={i18n.t('signOut')}
          signOut
        />
      </View>
    </>
  );
};
