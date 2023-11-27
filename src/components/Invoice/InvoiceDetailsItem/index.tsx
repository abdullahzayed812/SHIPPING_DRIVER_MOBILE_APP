import React from 'react';
import { View, Text } from 'react-native';
import i18n from '../../../helpers/language';
import { styles } from './styles';

interface Props {
  awb: string;
  amount: string;
  date: string;
  time: string;
}

export const InvoiceDetailsItem: React.FC<Props> = ({
  awb,
  amount,
  date,
  time,
}) => {
  return (
    <View style={styles.invoiceDetailsItem}>
      <View>
        <View style={styles.row}>
          <Text style={styles.rowText}>AWB: {awb}</Text>
          <Text style={styles.rowText}>
            {i18n.t('amount')}: {amount}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {i18n.t('date')}: {date}
          </Text>
          <Text style={styles.rowText}>
            {i18n.t('time')}: {time}
          </Text>
        </View>
      </View>
    </View>
  );
};
