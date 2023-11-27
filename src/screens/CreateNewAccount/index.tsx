import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import { PageTitle } from '../../components/Common/PageTitle';
import { InputField } from '../../components/Common/InputField';
import { CustomButton } from '../../components/Common/CustomButton';
import { styles } from './style';
import { IMAGES } from '../../helpers/images';
import { StepText } from '../../components/CreateNewAccount/StepText';
import { Header } from '../../components/Common/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getBranches, register } from '../../redux/auth/registerSlice';
import { verifyInput } from '../../utils/validation/inputValidation';
import {
  validEmail,
  validMobileNumber,
  validPassword6_20,
  validUserName,
} from '../../constants/regularExpression';
import i18n from '../../helpers/language';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AuthStackScreen'>;
}

export interface NewAccountData {
  branch_id: number | string;
  phone: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export const CreateNewAccount: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [selectBranchValue, setSelectBranchValue] = useState<number | string>(
    '',
  );
  const [selectBranchLabel, setSelectBranchLabel] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [secureTextEntryPassword, setSecureTextEntryPassword] =
    useState<boolean>(true);
  const [secureTextEntryConfirmPassword, setSecureTextEntryConfirmPassword] =
    useState<boolean>(true);
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorMobileNumber, setErrorMobileNumber] = useState<string>('');
  const [errorFirstName, setErrorFirstName] = useState<string>('');
  const [errorLastName, setErrorLastName] = useState<string>('');
  const [errorSelectBranch, setErrorSelectBranch] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [errorConfrimPassword, setErrorConfirmPassword] = useState<string>('');

  const { branches } = useAppSelector(state => state.register);
  const dispatch = useAppDispatch();

  const selectBranchType = (type: number | string, label: string) => {
    setSelectBranchValue(type);
    setSelectBranchLabel(label);
    setShowModal(false);
  };

  const submitRegister = async () => {
    const newAccountData = {
      branch_id: selectBranchValue,
      phone: mobileNumber,
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: confirmPassword,
    };
    if (
      email &&
      mobileNumber &&
      firstName &&
      lastName &&
      selectBranchValue &&
      password &&
      confirmPassword
    ) {
      if (
        verifyInput(validEmail, email) &&
        verifyInput(validMobileNumber, mobileNumber) &&
        verifyInput(validUserName, firstName) &&
        verifyInput(validUserName, lastName) &&
        verifyInput(validPassword6_20, password) &&
        verifyInput(validPassword6_20, confirmPassword)
      ) {
        if (password === confirmPassword) {
          navigation.navigate('AuthStackScreen', {
            screen: 'CreateNewAccount2',
            params: newAccountData,
          });
        } else {
          Toast.show({
            type: 'error',
            text1: i18n.t('confPassErr').toString(),
            text2: i18n.t('checkPassIdentical').toString(),
          });
        }
      } else {
        Toast.show({
          type: 'error',
          text1: i18n.t('validationErr').toString(),
          text2: i18n.t('checkValiErr').toString(),
        });
      }
    }
    if (
      !email &&
      !mobileNumber &&
      !firstName &&
      !lastName &&
      !selectBranchValue &&
      !password &&
      !confirmPassword
    ) {
      setErrorEmail(prev => (prev = i18n.t('emailRequired')));
      setErrorMobileNumber(prev => (prev = i18n.t('mobileRequired')));
      setErrorFirstName(prev => (prev = i18n.t('firstNameReuired')));
      setErrorLastName(prev => (prev = i18n.t('lastNameRequired')));
      setErrorSelectBranch(prev => (prev = i18n.t('passRequired')));
      setErrorPassword(prev => (prev = i18n.t('passRequired')));
      setErrorConfirmPassword(prev => (prev = i18n.t('confirmPassRequired')));
    }
    !email
      ? setErrorEmail(prev => (prev = i18n.t('emailRequired')))
      : setErrorEmail('');
    !mobileNumber
      ? setErrorMobileNumber(prev => (prev = i18n.t('mobileRequired')))
      : setErrorMobileNumber('');
    !firstName
      ? setErrorFirstName(prev => (prev = i18n.t('firstNameReuired')))
      : setErrorFirstName('');
    !lastName
      ? setErrorLastName(prev => (prev = i18n.t('lastNameRequired')))
      : setErrorLastName('');
    !selectBranchLabel
      ? setErrorSelectBranch(prev => (prev = i18n.t('selectBrancheRequired')))
      : setErrorSelectBranch('');
    !password
      ? setErrorPassword(prev => (prev = i18n.t('passRequired')))
      : setErrorPassword('');
    !confirmPassword
      ? setErrorConfirmPassword(prev => (prev = i18n.t('confirmPassRequired')))
      : setErrorConfirmPassword('');
  };

  useEffect(() => {
    setSelectBranchValue('');
    setSelectBranchLabel('');
    getBranches(dispatch);
  }, []);

  useEffect(() => {
    if (email) setErrorEmail('');
  }, [email]);
  useEffect(() => {
    if (mobileNumber) setErrorMobileNumber('');
  }, [mobileNumber]);
  useEffect(() => {
    if (firstName) setErrorFirstName('');
  }, [firstName]);
  useEffect(() => {
    if (lastName) setErrorLastName('');
  }, [lastName]);
  useEffect(() => {
    if (selectBranchLabel) setErrorSelectBranch('');
  }, [selectBranchLabel]);
  useEffect(() => {
    if (password) setErrorPassword('');
  }, [password]);
  useEffect(() => {
    if (confirmPassword) setErrorConfirmPassword('');
  }, [confirmPassword]);

  return (
    <>
      <Header backImageSource={IMAGES.leftArrow} />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StepText number="1" />
          <PageTitle
            title={i18n.t('createNewAccount').toString()}
            titleWrapperStyle={styles.pageTitle}
          />
          <Text style={styles.personalInfoText}>{i18n.t('personalInfo')}</Text>
          <InputField
            label={i18n.t('yourEmail').toString()}
            value={email}
            setValue={(text: string) => setEmail(text)}
            errorMessage={errorEmail}
            placeholder="name.words382@example.com"
          />
          <InputField
            label={i18n.t('yourNumber').toString()}
            value={mobileNumber}
            setValue={(text: string) => setMobileNumber(text)}
            errorMessage={errorMobileNumber}
            placeholder="966+mobile number"
          />
          <View style={styles.nameRow}>
            <InputField
              label={i18n.t('firstName').toString()}
              inputContainerStyle={styles.inputContainerStyle}
              value={firstName}
              setValue={(text: string) => setFirstName(text)}
              errorMessage={errorFirstName}
            />
            <InputField
              label={i18n.t('lastName').toString()}
              inputContainerStyle={styles.inputContainerStyle}
              value={lastName}
              setValue={(text: string) => setLastName(text)}
              errorMessage={errorLastName}
            />
          </View>
          <View style={styles.branchesBox}>
            <Text style={styles.branchesTitle}>{i18n.t('selectBranches')}</Text>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <View style={styles.grayBox}>
                <Text style={styles.selectedBranch}>{selectBranchLabel}</Text>
                <Image source={IMAGES.rightBigArrow} style={styles.image} />
              </View>
            </TouchableOpacity>
            {errorSelectBranch ? (
              <Text style={styles.errorMessage}>
                {i18n.t('selectBrancheRequired')}
              </Text>
            ) : null}
          </View>
          <Modal visible={showModal} transparent>
            <Pressable onPress={() => setShowModal(false)}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  {branches.map(({ value, label }) => (
                    <TouchableOpacity
                      key={value}
                      style={styles.modalRow}
                      onPress={() => selectBranchType(value, label)}
                    >
                      <Text style={styles.modalText}>{label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </Pressable>
          </Modal>
          <InputField
            label={i18n.t('password').toString()}
            imageSource={IMAGES.showPassword}
            value={password}
            setValue={(text: string) => setPassword(text)}
            secureTextEntry={secureTextEntryPassword}
            setSecureTextEntry={setSecureTextEntryPassword}
            touchableImage
            errorMessage={errorPassword}
          />
          <InputField
            label={i18n.t('confirmPass').toString()}
            imageSource={IMAGES.showPassword}
            value={confirmPassword}
            setValue={(text: string) => setConfirmPassword(text)}
            secureTextEntry={secureTextEntryConfirmPassword}
            setSecureTextEntry={setSecureTextEntryConfirmPassword}
            touchableImage
            errorMessage={errorConfrimPassword}
          />
          <CustomButton
            title={i18n.t('continue').toString()}
            onPress={submitRegister}
          />
        </View>
      </ScrollView>
    </>
  );
};
