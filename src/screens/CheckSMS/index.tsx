import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { PageTitle } from '../../components/Common/PageTitle';
import { CustomButton } from '../../components/Common/CustomButton';
import { InputField } from '../../components/Common/InputField';
import { styles } from './style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { confirmCode } from '../../redux/auth/confirmationCodeSlice';
import { useAppDispatch } from '../../redux/hooks';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import i18n from '../../helpers/language';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AuthStackScreen'>;
}

export const CheckSMS: React.FC<Props> = ({ navigation }) => {
  const [confirmationCode, setConfirmationCode] = useState<string>('');
  const [confirmationCodeErrorMessage, setConfirmationCodeErrorMessage] =
    useState<string>('');

  const dispatch = useAppDispatch();

  const sendConfirmationCode = async () => {
    if (confirmationCode) {
      setConfirmationCodeErrorMessage('');
      const confirmationCodeResponse = await confirmCode(dispatch, {
        confirmation_code: Number(confirmationCode),
      });
      if (confirmationCodeResponse?.status == 200) {
        navigation.navigate('AuthStackScreen', { screen: 'Login' });
      } else {
        Toast.show({
          type: 'error',
          text1: i18n.t('incorrectConfCode').toString(),
          text2: i18n.t('checkConfCode').toString(),
        });
      }
    } else {
      setConfirmationCodeErrorMessage(
        prev => (prev = i18n.t('confirmationCodeRequired')),
      );
    }
  };

  useEffect(() => {
    if (confirmationCode) {
      setConfirmationCodeErrorMessage('');
    }
  }, [confirmationCode]);
  return (
    <View style={styles.container}>
      <PageTitle title="Check The SMS" />
      <InputField
        label="write the code"
        value={confirmationCode}
        setValue={setConfirmationCode}
        errorMessage={confirmationCodeErrorMessage}
        placeholder="SMS code"
      />
      <CustomButton title="Verification Code" onPress={sendConfirmationCode} />
    </View>
  );
};
