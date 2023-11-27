import React, { Dispatch, SetStateAction } from 'react';
import { Text } from 'react-native';
import i18n from '../../../../helpers/language';
import { CustomButton } from '../../../Common/CustomButton';
import { styles } from './style';

interface Props {
  handleTryAgain: () => void;
  titleText: string;
}

export const NotFound: React.FC<Props> = ({ handleTryAgain, titleText }) => {
  return (
    <>
      <Text style={styles.shipmentNotFoundText}>{i18n.t(titleText)}</Text>
      <CustomButton
        title={i18n.t('tryAddAgain').toString()}
        buttonStyle={styles.buttonStyle}
        onPress={handleTryAgain}
      />
    </>
  );
};
