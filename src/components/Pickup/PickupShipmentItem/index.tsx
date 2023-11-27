import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import i18n from '../../../helpers/language';
import { PickUpStackParamList } from '../../../navigation/types';
import { styles } from './style';

interface Props {
  totalAWB: string;
  date: string;
  time: string;
  receiverAddress?: string;
  receiverPhone?: string;
  senderLat?: number;
  senderLng?: number;
  status: number;
  signatureResult?: string;
}

export const PickupShipmentItem: React.FC<Props> = ({
  totalAWB,
  date,
  time,
  receiverAddress,
  receiverPhone,
  senderLat,
  senderLng,
  status,
  signatureResult,
}) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<PickUpStackParamList, 'PickupShipment'>
    >();

  const pickupButtonStyle =
    status === 13 ? styles.readyToPickupButtonStyle : styles.pickupStyle;

  const navigateToScanShipment = (): void => {
    if (status === 13 && signatureResult) {
      navigation.navigate('ScanShipment', {
        receiverAddress,
        receiverPhone,
        senderLat,
        senderLng,
        signatureResult,
        awb: totalAWB,
      });
    } else if (status === 13 && !signatureResult) {
      Toast.show({
        type: 'error',
        text1: 'Signatrue is required',
        text2: 'Please put your signature first',
      });
    }
  };

  return (
    <TouchableOpacity
      style={styles.pickupShipmentBox}
      onPress={navigateToScanShipment}
    >
      <View style={[styles.buttonStyle, pickupButtonStyle]}>
        <Text style={styles.buttonTitleStyle}>
          {status === 13 ? i18n.t('readyToPickup') : i18n.t('pickedUp')}
        </Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.rowText}>
          AWB <Text style={styles.textValue}>{totalAWB}</Text>
        </Text>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {i18n.t('date')}: <Text style={styles.textValue}>{date}</Text>
          </Text>
          <Text style={styles.rowText}>
            {i18n.t('time')}: <Text style={styles.textValue}>{time}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
