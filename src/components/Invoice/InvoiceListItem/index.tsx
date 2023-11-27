import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { CustomButton } from '../../Common/CustomButton';
import { styles } from './style';
import type {
  HomeStackParamList,
  InvoicesStackParamList,
} from '../../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import i18n from '../../../helpers/language';
import { DRSListItemHeader } from '../../DRSList/DRSLIstItemHeader';

interface Props {
  id: number;
  number: string;
  amount: string;
  year: string;
  count: string;
  month: string;
}

export const InvoiceListItem: React.FC<Props> = ({
  id,
  number,
  amount,
  year,
  count,
  month,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.invoiceListItem}
      key={id}
      onPress={() =>
        navigation.navigate('InvoicesStackScreen', {
          screen: 'InvoiceDetails',
          params: { id },
        })
      }
    >
      <DRSListItemHeader headerTittle="knowDetails" />
      <View>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {i18n.t('number')}: {number}
          </Text>
          <Text style={styles.rowText}>
            {i18n.t('amount')}: {amount}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {i18n.t('year')}: {year}
          </Text>
          <Text style={styles.rowText}>
            {i18n.t('month')}: {month}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {i18n.t('count')}: {count}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
