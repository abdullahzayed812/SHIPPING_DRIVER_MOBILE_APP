import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveUserData(user: any) {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}

export async function loadUserData() {
  try {
    const userData = await AsyncStorage.getItem('userData');
    return userData !== null ? JSON.parse(userData) : null;
  } catch (error) {
    console.log(error);
  }
}

export async function removeUserData() {
  try {
    await AsyncStorage.removeItem('userData');
    console.log('User data removed');
  } catch (error) {
    console.log(error);
  }
}

export async function saveTokenData(token: string, tokenType: string) {
  try {
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('tokenType', tokenType);
  } catch (error) {
    console.log(error);
  }
}

export async function loadTokenData() {
  try {
    const token = await AsyncStorage.getItem('token');
    const tokenType = await AsyncStorage.getItem('tokenType');
    return token !== null && tokenType !== null ? { token, tokenType } : null;
  } catch (error) {
    console.log(error);
  }
}

export async function saveAppLanguage(lang: string) {
  try {
    await AsyncStorage.setItem('appLanguage', lang);
  } catch (error) {
    console.log(error);
  }
}

export async function loadAppLanguage() {
  const language = await AsyncStorage.getItem('appLanguage');
  return language !== null ? language : null;
}

export async function removeAppLanguage() {
  await AsyncStorage.removeItem('appLanguage');
  return;
}
