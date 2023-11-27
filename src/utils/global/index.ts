import { changeLanguage } from 'i18next';
import { Linking, PermissionsAndroid } from 'react-native';
import {
  CameraType,
  launchCamera,
  launchImageLibrary,
  MediaType,
} from 'react-native-image-picker';
import { saveAppLanguage } from '../../helpers/asyncStorage';
import { navigationRef } from '../../navigation';

export async function changeAppLanguage(lang: string) {
  if (navigationRef.isReady()) {
    await saveAppLanguage(lang);
    navigationRef.reset({ routes: [{ name: 'Splash' }] });
  }
}

export const openCallApp = async (phoneNumber: string | undefined) => {
  await Linking.openURL(`tel:${phoneNumber}`);
};

export const openGoogleMap = async (url: string) => {
  await Linking.openURL(url);
};

export function filterData(list: [], searchedFor: string, comparedTo: string) {
  const newList = list.filter((item: any) =>
    comparedTo.toLowerCase() === ''
      ? item
      : item[searchedFor].toString().toLowerCase().includes(comparedTo),
  );
  return newList;
}

export const takePhoto = async (
  setState: (uri: string | undefined) => void,
) => {
  const options: {
    mediaType: MediaType;
    includeBase64: boolean;
    cameraType: CameraType;
  } = {
    mediaType: 'photo',
    includeBase64: true,
    cameraType: 'back',
  };
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  );
  if (granted) {
    const response = await launchCamera(options);
    if (response?.assets) {
      const imageURI = `data:image/png;base64,${response?.assets[0]?.base64}`;
      setState(imageURI);
    }
  }
};

export const uploadImage = async (
  setState: (uri: string | undefined) => void,
) => {
  const options: {
    mediaType: MediaType;
    includeBase64: boolean;
  } = {
    mediaType: 'photo',
    includeBase64: true,
  };
  const response = await launchImageLibrary(options);
  if (response?.assets) {
    const imageURI = `data:image/png;base64,${response?.assets[0]?.base64}`;
    setState(imageURI);
  }
};
