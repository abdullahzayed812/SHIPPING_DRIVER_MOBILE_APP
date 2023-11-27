import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import i18n from '../../../helpers/language';
import { HomeStackParamList } from '../../../navigation/types';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';
import { CustomButton } from '../../Common/CustomButton';
import { DRSListItemHeader } from '../DRSLIstItemHeader';
import { styles } from './style';

interface Props {
  drsId: number;
  totalAWB: string;
  drsBarcode: string;
  date: string;
  time: string;
  posAmount: string;
  delivered: string;
  cashAmount: string;
}

export const DRSListItem: React.FC<Props> = ({
  drsId,
  totalAWB,
  drsBarcode,
  date,
  time,
  posAmount,
  delivered,
  cashAmount,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.pickupListItemBox}
      onPress={() =>
        navigation.navigate('OrdersStackScreen', {
          screen: 'ShipmentList',
          params: {
            drsId,
            drsBarcode,
            awb: totalAWB,
          },
        })
      }
    >
      <DRSListItemHeader headerTittle="ShipmentOutForDelivery" />
      <View>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {i18n.t('drsId')}:{' '}
            <Text style={styles.textValue}>{drsBarcode}</Text>
          </Text>
          <Text style={styles.rowText}>
            {i18n.t('totalAwb')}:{' '}
            <Text style={styles.textValue}>{totalAWB}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {i18n.t('date')}: <Text style={styles.textValue}>{date}</Text>
          </Text>
          <Text style={styles.rowText}>
            {i18n.t('time')}: <Text style={styles.textValue}>{time}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {i18n.t('posAmount')}:{' '}
            <Text style={styles.textValue}>{posAmount}</Text>
          </Text>
          <Text style={styles.rowText}>
            {i18n.t('delivered')}:{' '}
            <Text style={styles.textValue}>{delivered}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {i18n.t('cashAmount')};{' '}
            <Text style={styles.textValue}>{cashAmount}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
