import React, { Dispatch, SetStateAction } from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import i18n from '../../../helpers/language';
import { CustomButton } from '../../Common/CustomButton';
import { PageTitle } from '../../Common/PageTitle';
import { styles } from './style';
import { changeAppLanguage } from '../../../utils/global';

interface Props {
  showLanguageModal: boolean;
  setShowLanguageModal: Dispatch<SetStateAction<boolean>>;
}

export const LanguageModal: React.FC<Props> = ({
  showLanguageModal,
  setShowLanguageModal,
}) => {
  const chooseLang = (langType: string): void => {
    setShowLanguageModal(false);
    changeAppLanguage(langType);
  };

  return (
    <Modal animationType="slide" transparent visible={showLanguageModal}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => setShowLanguageModal(false)}
      />
      <View style={styles.langBox}>
        <PageTitle title={i18n.t('chooseLanguage')} />
        <View style={styles.buttonBox}>
          <CustomButton
            outline
            title="العربية"
            buttonStyle={styles.buttonStyle}
            onPress={() => chooseLang('ar')}
          />
          <CustomButton
            title="English"
            buttonStyle={styles.buttonStyle}
            onPress={() => chooseLang('en')}
          />
        </View>
      </View>
    </Modal>
  );
};
