import React from 'react';
import { View } from 'react-native';
import { IMAGES } from '../../../../helpers/images';
import i18n from '../../../../helpers/language';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';
import { ShipmentDetailsRow } from '../ShipmentDetailsRow';
import { styles } from './style';

interface Props {
  createdAt: { date: string };
  paymentMode: string;
  totalCodAmount: number | string;
}

export const PackageInfo: React.FC<Props> = ({
  createdAt,
  paymentMode,
  totalCodAmount,
}) => {
  return (
    <View style={globalStyle.shipmentDetailsBox}>
      <ShipmentDetailsRow
        imageSource={IMAGES.rightYArrow}
        text={i18n.t('packageInfo').toString()}
        bigText
        textColor={styles.textColor}
      />
      <View style={styles.line} />
      <View style={styles.row}>
        <ShipmentDetailsRow
          imageSource={IMAGES.calender}
          text={i18n.t('bookingDate').toString() + ': '}
          extremeText={createdAt.date.split(' ')[0]}
          extremeTextColor={styles.textColor}
        />
        <ShipmentDetailsRow
          imageSource={IMAGES.time}
          text={i18n.t('bookingTime').toString() + ': '}
          extremeText={createdAt.date.split(' ')[1]}
          extremeTextColor={styles.textColor}
        />
      </View>
      <View style={styles.halfRow}>
        <ShipmentDetailsRow
          imageSource={IMAGES.shipment}
          text={i18n.t('shipment').toString() + ': '}
          extremeText={paymentMode}
          extremeTextColor={styles.textColor}
        />
        <ShipmentDetailsRow
          imageSource={IMAGES.type}
          text={i18n.t('type').toString() + ': '}
          extremeTextColor={styles.textColor}
        />
      </View>
      <ShipmentDetailsRow
        imageSource={IMAGES.codAmount}
        text={i18n.t('codAmount').toString() + ': '}
        extremeText={String(totalCodAmount)}
        extremeTextColor={styles.textColor}
      />
    </View>
  );
};
