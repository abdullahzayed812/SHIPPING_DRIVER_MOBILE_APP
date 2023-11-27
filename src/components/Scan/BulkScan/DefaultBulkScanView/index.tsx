import React, { Dispatch, SetStateAction } from 'react';
import { Text } from 'react-native';
import i18n from '../../../../helpers/language';
import { CustomButton } from '../../../Common/CustomButton';
import { InputField } from '../../../Common/InputField';
import { styles } from './style';

interface Props {
  awb: string;
  setAwb: Dispatch<SetStateAction<string>>;
  signature: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  submit: () => void;
}

export const DefaultBulkScanView: React.FC<Props> = ({
  awb,
  setAwb,
  signature,
  setShowModal,
  submit,
}) => {
  return (
    <>
      <Text style={styles.signatureText}>
        {/* {i18n.t('putYourSignature')} */}
      </Text>
      <InputField
        inputContainerStyle={styles.inputBox}
        multiline
        value={awb}
        setValue={setAwb}
      />
      <CustomButton
        title={i18n.t('signature').toString()}
        buttonStyle={styles.buttonStyle}
        onPress={() => setShowModal(true)}
      />
      {signature ? (
        <CustomButton
          title={i18n.t('submit').toString()}
          buttonStyle={styles.buttonStyle}
          onPress={submit}
        />
      ) : null}
    </>
  );
};
