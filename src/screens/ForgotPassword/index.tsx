import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { InputField } from '../../components/Common/InputField';
import { CustomButton } from '../../components/Common/CustomButton';
import { PageTitle } from '../../components/Common/PageTitle';
import { styles } from './style';
import { Header } from '../../components/Common/Header';
import { IMAGES } from '../../helpers/images';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { useAppDispatch } from '../../redux/hooks';
import { forgotPassword } from '../../redux/auth/forgotPasswordSlice';
import { verifyInput } from '../../utils/validation/inputValidation';
import { validMobileNumber } from '../../constants/regularExpression';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import i18n from '../../helpers/language';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AuthStackScreen'>;
}

export const ForgotPassword: React.FC<Props> = ({ navigation }) => {
  const [phone, setPhone] = useState<string>('');
  const [phoneErroMessage, setPhoneErrorMessage] = useState<string>('');

  const dispatch = useAppDispatch();

  const sendPhoneNumber = async () => {
    if (phone) {
      setPhoneErrorMessage('');
      if (verifyInput(validMobileNumber, phone)) {
        const forgotPasswordResponse = await forgotPassword(dispatch, {
          phone,
        });
        if (
          forgotPasswordResponse?.data?.message ===
          'Successfully send message with new password'
        ) {
          navigation.navigate('AuthStackScreen', { screen: 'CheckSMS' });
        } else {
          Toast.show({
            type: 'error',
            text1: i18n.t('notFoundDriver').toString(),
            text2: i18n.t('tryAgain').toString(),
          });
        }
      } else {
        Toast.show({
          type: 'error',
          text1: i18n.t('errorPhoneNumber').toString(),
          text2: i18n.t('enterValidPhone').toString(),
        });
      }
    } else {
      setPhoneErrorMessage(prev => (prev = i18n.t('phoneRequired')));
    }
  };

  useEffect(() => {
    if (phone) {
      setPhoneErrorMessage('');
    }
  }, [phone]);

  return (
    <>
      <Header backImageSource={IMAGES.leftArrow} />
      <View style={styles.container}>
        <PageTitle
          title={i18n.t('forgotPass') + '?'}
          titleWrapperStyle={styles.pageTitle}
        />
        <Text style={styles.resetText}>{i18n.t('sendSMS')}</Text>
        <InputField
          label={i18n.t('writeYourPhone').toString()}
          value={phone}
          setValue={(text: string) => setPhone(text)}
          errorMessage={phoneErroMessage}
          placeholder="966+mobile number"
        />
        <CustomButton
          title={i18n.t('next').toString()}
          buttonStyle={styles.buttonStyle}
          onPress={sendPhoneNumber}
        />
        <Text style={styles.haveAProblemText}>
          {i18n.t('havaAProblem')}
          <Text style={styles.resendText}>{i18n.t('resend')}</Text>
        </Text>
      </View>
    </>
  );
};
