import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import i18n from '../../../helpers/language';
import {
  HomeStackParamList,
  PickUpStackParamList,
} from '../../../navigation/types';
import { CustomButton } from '../../Common/CustomButton';
import { DRSListItemHeader } from '../../DRSList/DRSLIstItemHeader';
import { Loading } from '../../Loading';
import { styles } from './style';

interface Props {
  id: number;
  totalAWB?: string;
  drsId?: string;
  date?: string;
  time?: string;
}

export const PickupListItem: React.FC<Props> = ({
  id,
  totalAWB,
  drsId,
  date,
  time,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.pickupListItemBox}
      key={id}
      onPress={() =>
        navigation.navigate('PickupStackScreen', {
          screen: 'PickupShipment',
          params: { id },
        })
      }
    >
      <DRSListItemHeader headerTittle="pickup" />
      <View>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {i18n.t('totalAwb')}:{' '}
            <Text style={styles.textValue}>{totalAWB}</Text>
          </Text>
          <Text style={styles.rowText}>
            {i18n.t('drsId')}: <Text style={styles.textValue}>{drsId}</Text>
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
      </View>
    </TouchableOpacity>
  );
};
