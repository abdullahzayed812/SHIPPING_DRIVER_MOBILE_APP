import React from 'react';
import { View } from 'react-native';
import { PageTitle } from '../../components/Common/PageTitle';
import { CustomButton } from '../../components/Common/CustomButton';
import { Splash } from '../../components/Splash';
import { styles } from './style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import i18n from '../../helpers/language';
import { changeAppLanguage } from '../../utils/global';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AuthStackScreen'>;
}

export const ChooseLangScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Splash />
      <View style={styles.langBox}>
        <PageTitle title={i18n.t('chooseLanguage')} />
        <View style={styles.buttonBox}>
          <CustomButton
            outline
            title="العربية"
            buttonStyle={styles.buttonStyle}
            onPress={() => changeAppLanguage('ar')}
          />
          <CustomButton
            title="English"
            buttonStyle={styles.buttonStyle}
            onPress={() => changeAppLanguage('en')}
          />
        </View>
      </View>
    </View>
  );
};
