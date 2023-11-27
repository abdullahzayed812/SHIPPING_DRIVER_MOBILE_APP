import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  HomeStackParamList,
  RootStackParamList,
} from '../../../navigation/types';
import { styles } from './style';
import { DeliveryInfo } from '../shipmentDetails/DeliveryInfo';
import i18n from '../../../helpers/language';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';
import { colors } from '../../../helpers/colors';

interface Props {
  awb: string;
  pieces: string | number;
  date: string;
  time: string;
  whatsAppMessages: string;
  address: string;
  deliveredStatus: number;
  drsId: number;
  shipmentId: number;
  receiverPhone: string;
  senderLat: number;
  senderLng: number;
}

export const ShipmentListItem: React.FC<Props> = ({
  awb,
  pieces,
  date,
  time,
  whatsAppMessages,
  address,
  deliveredStatus,
  drsId,
  shipmentId,
  receiverPhone,
  senderLat,
  senderLng,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const handleItemPress = (): void | null => {
    if (deliveredStatus === 11 || deliveredStatus === 6) {
      navigation.navigate('OrdersStackScreen', {
        screen: 'ShipmentDetails',
        params: { shipmentId, awb, drsId },
      });
    } else if (deliveredStatus === 34 || deliveredStatus === 33) {
      navigation.navigate('OrdersStackScreen', {
        screen: 'ReadyForReversePickupScan',
        params: {
          receiverPhone,
          senderLat,
          senderLng,
          drsId,
          shipmentId,
        },
      });
    } else {
      return null;
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.pickupListItemBox,
        {
          backgroundColor:
            deliveredStatus === 7
              ? '#4caf5073'
              : deliveredStatus === 11
              ? '#ff000052'
              : deliveredStatus === 6
              ? colors.lightMainColor
              : '#347bc25e',
        },
      ]}
      onPress={handleItemPress}
    >
      <View
        style={[
          styles.curvedPart,
          deliveredStatus === 7
            ? styles.deliveredStyle
            : deliveredStatus === 11
            ? styles.notDeliveredStyle
            : deliveredStatus === 6
            ? styles.running
            : styles.readyForReversePickup,
        ]}
      >
        <Text style={styles.curvedPartText}>
          {deliveredStatus === 7
            ? i18n.t('delivered')
            : deliveredStatus === 11
            ? i18n.t('notDelivered')
            : deliveredStatus === 6
            ? i18n.t('running')
            : deliveredStatus === 33
            ? i18n.t('shipmentNotPickup')
            : deliveredStatus === 34
            ? i18n.t('readyForReversePickup')
            : deliveredStatus === 13
            ? i18n.t('pickedUp')
            : deliveredStatus === 16
            ? i18n.t('returnFromCourier')
            : ''}
        </Text>
      </View>
      <View style={styles.textBox}>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            AWB: <Text style={globalStyle.normalText}>{awb}</Text>
          </Text>
          <Text style={styles.rowText}>
            {i18n.t('pieces')}{' '}
            <Text style={globalStyle.normalText}>{pieces}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {i18n.t('date')}: <Text style={globalStyle.normalText}>{date}</Text>
          </Text>
          <Text style={styles.rowText}>
            {i18n.t('time')}: <Text style={globalStyle.normalText}>{time}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {i18n.t('whatsAppMessages')}:{' '}
            <Text style={globalStyle.normalText}>{whatsAppMessages}</Text>
          </Text>
          <Text style={styles.rowText}>
            {i18n.t('address')}:{' '}
            <Text style={globalStyle.normalText}>{address}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.link}>Lorem Ipsum is simply dummy text</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
