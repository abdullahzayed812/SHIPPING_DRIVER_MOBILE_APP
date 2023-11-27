import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { PageTitle } from '../../components/Common/PageTitle';
import { CustomButton } from '../../components/Common/CustomButton';
import { StepText } from '../../components/CreateNewAccount/StepText';
import { styles } from './style';
import { colors } from '../../helpers/colors';
import { IMAGES } from '../../helpers/images';
import { Header } from '../../components/Common/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList, RootStackParamList } from '../../navigation/types';
import { RouteProp } from '@react-navigation/native';
import { register } from '../../redux/auth/registerSlice';
import { useAppDispatch } from '../../redux/hooks';
import { uploadImage } from '../../utils/global';
import i18n from '../../helpers/language';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AuthStackScreen'>;
  route: RouteProp<AuthStackParamList, 'CreateNewAccount2'>;
}

export const CreateNewAccount2: React.FC<Props> = ({ navigation, route }) => {
  const [profilePhoto, setProfilePhoto] = useState<string | undefined>('');
  const [licensePhoto, setLicensePhoto] = useState<string | undefined>('');
  const [idPhoto, setIdPhoto] = useState<string | undefined>('');
  const [profilePhotoErrorMessage, setProfilePhotoErrorMessage] =
    useState<string>('');
  const [licensePhotoErrorMessage, setLicensePhotoErrorMessage] =
    useState<string>('');
  const [idPhotoErrorMessage, setIdPhotoErroMessage] = useState<string>('');

  const dispatch = useAppDispatch();

  const requestData = {
    ...route.params,
    avatar: profilePhoto,
    license: licensePhoto,
    iqama_id: idPhoto,
  };

  const createAccount = async () => {
    if (profilePhoto && licensePhoto && idPhoto) {
      const registerResponse = await register(dispatch, requestData);
      if (registerResponse?.data?.status === 200) {
        navigation.navigate('AuthStackScreen', { screen: 'Login' });
      } else {
        Toast.show({
          type: 'error',
          text1: i18n.t('registerErr').toString(),
          text2: i18n.t('incorrectData').toString(),
        });
      }
      setProfilePhotoErrorMessage('');
      setLicensePhotoErrorMessage('');
      setIdPhotoErroMessage('');
    } else if (!profilePhoto && !licensePhoto && !idPhoto) {
      setProfilePhotoErrorMessage(prev => (prev = i18n.t('avatarRequired')));
      setLicensePhotoErrorMessage(prev => (prev = i18n.t('licenseRequired')));
      setIdPhotoErroMessage(prev => (prev = i18n.t('idRequired')));
    } else if (!profilePhoto) {
      setProfilePhotoErrorMessage(prev => (prev = i18n.t('avatarRequired')));
    } else if (!licensePhoto) {
      setLicensePhotoErrorMessage(prev => (prev = i18n.t('licenseRequired')));
    } else if (!idPhoto) {
      setIdPhotoErroMessage(prev => (prev = i18n.t('idRequired')));
    }
  };

  return (
    <>
      <Header backImageSource={IMAGES.leftArrow} />
      <View style={styles.container}>
        <StepText number="2" />
        <PageTitle
          title={i18n.t('createNewAccount')}
          titleWrapperStyle={styles.pageTitle}
        />
        <Text style={styles.uploadDoc}>{i18n.t('uploadDocuments')}</Text>
        <View
          style={[
            styles.profilePictureBox,
            !profilePhotoErrorMessage ? styles.marginBottom : {},
          ]}
        >
          <View style={styles.uploadImageBox}>
            {profilePhoto ? (
              <Image
                source={{ uri: profilePhoto }}
                style={styles.profilePhoto}
              />
            ) : null}
          </View>
          <View>
            <Text style={styles.profileText}>
              {i18n.t('theProfilePicture')}
            </Text>
            <TouchableOpacity onPress={() => uploadImage(setProfilePhoto)}>
              <Text style={[styles.profileText, { color: colors.mainColor }]}>
                {i18n.t('uploadPicture')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.errorMessage}>{profilePhotoErrorMessage}</Text>
        <Text style={styles.titleInputShape}>Upload license file</Text>
        <TouchableOpacity
          style={[
            styles.inputShape,
            !licensePhotoErrorMessage ? styles.marginBottom : {},
          ]}
          onPress={() => uploadImage(setLicensePhoto)}
        >
          {licensePhoto ? (
            <Image
              source={{ uri: licensePhoto }}
              style={styles.uploadedImage}
            />
          ) : null}
          <Image source={IMAGES.upload} style={styles.iconImage} />
        </TouchableOpacity>
        <Text style={styles.errorMessage}>{licensePhotoErrorMessage}</Text>
        <Text style={styles.titleInputShape}>{i18n.t('uploadId')}</Text>
        <TouchableOpacity
          style={[
            styles.inputShape,
            !idPhotoErrorMessage ? styles.marginBottom : {},
          ]}
          onPress={() => uploadImage(setIdPhoto)}
        >
          {idPhoto ? (
            <Image source={{ uri: idPhoto }} style={styles.uploadedImage} />
          ) : null}
          <Image source={IMAGES.upload} style={styles.iconImage} />
        </TouchableOpacity>
        <Text style={styles.errorMessage}>{idPhotoErrorMessage}</Text>
        <CustomButton
          title={i18n.t('create').toString()}
          onPress={createAccount}
        />
      </View>
    </>
  );
};
