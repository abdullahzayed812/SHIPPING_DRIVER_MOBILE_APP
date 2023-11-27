import React, { Dispatch, SetStateAction } from 'react';
import { View, Text } from 'react-native';
import i18n from '../../../../helpers/language';
import { InputField } from '../../../Common/InputField';
import { styles } from './style';

interface Props {
  scannerInputValue: string;
  handleScan: (scanResult: string) => void;
}

export const Scanner: React.FC<Props> = ({ scannerInputValue, handleScan }) => {
  return (
    <View style={styles.container}>
      <View style={styles.scannerBox}>
        <Text style={styles.scannerText}>{i18n.t('alignCodeWithScan')}</Text>
        <View>
          <InputField
            inputContainerStyle={styles.inputContainerStyle}
            multiline
            value={scannerInputValue}
            setValue={handleScan}
          />
        </View>
      </View>
    </View>
  );
};
