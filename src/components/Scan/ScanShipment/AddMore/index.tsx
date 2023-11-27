import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { colors } from '../../../../helpers/colors';
import i18n from '../../../../helpers/language';
import { ScanStackParamList } from '../../../../navigation/types';
import { CustomButton } from '../../../Common/CustomButton';
import { styles } from './style';

interface Props {
  setScanned?: Dispatch<SetStateAction<boolean>>;
  setScannerInputValue?: Dispatch<SetStateAction<string>>;
  setModalVisible?: Dispatch<SetStateAction<boolean>>;
  scannedShipments?: string[];
}

export const AddMore: React.FC<Props> = ({
  setScanned,
  setScannerInputValue,
  setModalVisible,
  scannedShipments,
}) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<ScanStackParamList, 'ScanScreen'>
    >();

  const handleAddMore = () => {
    setScanned?.(false);
    setScannerInputValue?.('');
    setModalVisible?.(true);
  };

  const handleAdd = () => {
    if (scannedShipments?.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'No shipmets to add',
        text2: 'Press to add more to scan again',
      });
      return;
    } else {
      setScanned?.(false);
      navigation.navigate('ScannedShipmentsList', { scannedShipments });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.addMoreBox}>
        <CustomButton
          title={i18n.t('addMore').toString()}
          buttonStyle={styles.addMoreButtonStyle}
          titleStyle={styles.addMoreButtonTitleStyle}
          onPress={handleAddMore}
        />
        <CustomButton
          title={i18n.t('add').toString()}
          buttonStyle={{
            ...styles.addButtonStyle,
            backgroundColor:
              scannedShipments!.length > 0
                ? colors.darkColor
                : colors.lightGreen,
          }}
          titleStyle={styles.addButtonTitleStyle}
          onPress={handleAdd}
        />
      </View>
    </View>
  );
};
