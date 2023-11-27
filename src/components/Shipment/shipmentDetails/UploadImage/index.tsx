import React, { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';
import i18n from '../../../../helpers/language';
import { takePhoto, uploadImage } from '../../../../utils/global';
import { CustomButton } from '../../../Common/CustomButton';
import { InputField } from '../../../Common/InputField';
import { styles } from './style';

interface Props {
  setUploadNotDeliveredImage: Dispatch<SetStateAction<string | undefined>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

export const UploadImage: React.FC<Props> = ({
  setUploadNotDeliveredImage,
  inputValue,
  setInputValue,
}) => {
  return (
    <>
      <View style={styles.canceledOrder}>
        <CustomButton
          title={i18n.t('takePhoto').toString()}
          buttonStyle={styles.cancelOrderBtn}
          onPress={() => takePhoto(setUploadNotDeliveredImage)}
        />
        <Text style={styles.cancelText}>{i18n.t('or')}</Text>
        <CustomButton
          title={i18n.t('chooseImage').toString()}
          buttonStyle={styles.cancelOrderBtn}
          onPress={() => uploadImage(setUploadNotDeliveredImage)}
        />
      </View>
      <InputField
        placeholder={i18n.t('addExtraReason').toString()}
        multiline
        inputContainerStyle={styles.inputContainerStyle}
        value={inputValue}
        setValue={setInputValue}
      />
    </>
  );
};
