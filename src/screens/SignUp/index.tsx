import React from 'react';
import { View, Text } from 'react-native';
import { Splash } from '../../components/Splash';
import { CustomButton } from '../../components/Common/CustomButton';
import { PageTitle } from '../../components/Common/PageTitle';
import { styles } from './style';
import { VERTICAL_SPACING } from '../../constants/spacing';
import { AuthStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import i18n from '../../helpers/language';

interface Props {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'SignUp'>;
  route: RouteProp<AuthStackParamList, 'SignUp'>;
}

export const SignUp: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Splash />
      <View style={styles.signUpBox}>
        <PageTitle
          title={i18n.t('WelcomeToQuadraLog')}
          titleWrapperStyle={{ marginBottom: 0 }}
        />
        <Text style={styles.signUpText}>{i18n.t('welcomeText')}</Text>
        <CustomButton
          title={i18n.t('login').toString()}
          buttonStyle={{
            ...styles.buttonStyle,
            marginBottom: VERTICAL_SPACING,
          }}
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          outline
          title={i18n.t('createNewAccount').toString()}
          buttonStyle={styles.buttonStyle}
          onPress={() => navigation.navigate('CreateNewAccount')}
        />
      </View>
    </View>
  );
};
