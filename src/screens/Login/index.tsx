import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { PageTitle } from '../../components/Common/PageTitle';
import { InputField } from '../../components/Common/InputField';
import { CustomButton } from '../../components/Common/CustomButton';
import { styles } from './style';
import { IMAGES } from '../../helpers/images';
import { Header } from '../../components/Common/Header';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { login } from '../../redux/auth/loginSlice';
import { saveTokenData, saveUserData } from '../../helpers/asyncStorage';
import { verifyInput } from '../../utils/validation/inputValidation';
import {
  simpleValidPassword,
  validEmail,
} from '../../constants/regularExpression';
import { Loading } from '../../components/Loading';
import i18n from '../../helpers/language';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AuthStackScreen'>;
}

export interface UserStateProps {
  email: string;
  password: string;
  messenger: number;
}

export const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const { loading } = useAppSelector(state => state.login);

  const submitLogin = async () => {
    if (email && password) {
      if (
        verifyInput(validEmail, email) &&
        verifyInput(simpleValidPassword, password)
      ) {
        const userData = { email, password, messenger: 1 };
        const loginResponse = await login(dispatch, userData);
        if (loginResponse?.data?.user?.id) {
          const { user, access_token, token_type } = loginResponse?.data;
          saveUserData(user);
          saveTokenData(access_token, token_type);
          navigation.reset({
            routes: [{ name: 'HomeStackScreen' }],
          });
        } else {
          Toast.show({
            type: 'error',
            text1: i18n.t('loginError').toString(),
            text2: i18n.t('loginErroMessage').toString(),
          });
        }
      } else {
        Toast.show({
          type: 'error',
          text1: i18n.t('loginError').toString(),
          text2: i18n.t('loginSecondErrMsg').toString(),
        });
      }
      setErrorEmail('');
      setErrorPassword('');
    }
    if (!email && !password) {
      setErrorEmail(prev => (prev = i18n.t('emailRequired')));
      setErrorPassword(prev => (prev = i18n.t('passRequired')));
    }
    !email
      ? setErrorEmail(prev => (prev = i18n.t('emailRequired')))
      : setErrorEmail('');
    !password
      ? setErrorPassword(prev => (prev = i18n.t('passRequired')))
      : setErrorPassword('');
  };

  useEffect(() => {
    if (email) {
      setErrorEmail('');
    }
  }, [email]);

  useEffect(() => {
    if (password) {
      setErrorPassword('');
    }
  }, [password]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header backImageSource={IMAGES.leftArrow} />
      <View style={styles.container}>
        <PageTitle title={i18n.t('signIn')} />
        <InputField
          label={i18n.t('emailOrPhone').toString()}
          value={email}
          setValue={(text: string) => setEmail(text)}
          errorMessage={errorEmail}
          placeholder="name.words38@example.com"
        />
        <InputField
          label={i18n.t('password').toString()}
          secureTextEntry={secureTextEntry}
          setSecureTextEntry={setSecureTextEntry}
          imageSource={IMAGES.showPassword}
          value={password}
          setValue={(text: string) => setPassword(text)}
          touchableImage
          errorMessage={errorPassword}
        />
        <View style={styles.textBox}>
          <View style={styles.rememberMe}>
            <Text style={styles.text}>{i18n.t('rememberMe')}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AuthStackScreen', {
                screen: 'ForgotPassword',
              })
            }
          >
            <Text style={styles.forgotText}>{i18n.t('forgotPass')}?</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          title={i18n.t('login').toString()}
          buttonStyle={styles.buttonStyle}
          onPress={submitLogin}
        />
        <View style={styles.makeAccount}>
          <Text style={styles.makeAccountText}>
            {i18n.t("haven'tAccount")}{' '}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AuthStackScreen', {
                  screen: 'CreateNewAccount',
                })
              }
            >
              <Text style={styles.signUpText}>{i18n.t('signUp')}</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </>
  );
};
