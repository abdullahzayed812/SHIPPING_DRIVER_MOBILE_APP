import React from 'react';
import { View } from 'react-native';
import { IMAGES } from '../../../../helpers/images';
import i18n from '../../../../helpers/language';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';
import { ShipmentDetailsRow } from '../ShipmentDetailsRow';
import { styles } from './style';

interface Props {
  senderAddress: string;
  senderPhone: string;
}

export const SenderCompany: React.FC<Props> = ({
  senderAddress,
  senderPhone,
}) => {
  return (
    <View style={globalStyle.shipmentDetailsBox}>
      <ShipmentDetailsRow
        imageSource={IMAGES.rightYArrow}
        text={i18n.t('senderCompany').toString()}
        bigText
        textColor={styles.textColor}
      />
      <View style={styles.line} />
      <View style={styles.row}>
        <ShipmentDetailsRow imageSource={IMAGES.soap} text={senderAddress} />
        <ShipmentDetailsRow
          imageSource={IMAGES.phone}
          extremeText={senderPhone}
        />
      </View>
    </View>
  );
};
