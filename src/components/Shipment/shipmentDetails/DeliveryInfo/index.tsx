import React from 'react';
import { View } from 'react-native';
import { IMAGES } from '../../../../helpers/images';
import i18n from '../../../../helpers/language';
import { calcWidth } from '../../../../helpers/sizes';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';
import { ShipmentDetailsRow } from '../ShipmentDetailsRow';
import { styles } from './style';

interface Props {
  receiverName?: string;
  receiverAddress: string;
  receiverPhone: string;
}

export const DeliveryInfo: React.FC<Props> = ({
  receiverName,
  receiverAddress,
  receiverPhone,
}) => {
  return (
    <View style={globalStyle.shipmentDetailsBox}>
      <ShipmentDetailsRow
        imageSource={IMAGES.rightYArrow}
        text={i18n.t('deliveryInfo').toString()}
        bigText
        textColor={styles.textColor}
      />
      <View style={styles.line} />
      <ShipmentDetailsRow
        imageSource={IMAGES.user}
        text={receiverName}
        bigText
      />
      <ShipmentDetailsRow
        imageSource={IMAGES.location}
        text={i18n.t('address').toString() + ': '}
        extremeText={receiverAddress}
        imageStyle={{ right: calcWidth(3) }}
      />
      <ShipmentDetailsRow
        imageSource={IMAGES.phone}
        text={i18n.t('mobileNumber').toString() + ': '}
        extremeText={receiverPhone}
        imageStyle={{ right: calcWidth(3) }}
      />
      <ShipmentDetailsRow
        imageSource={IMAGES.whatsApp}
        text={i18n.t('whatsAppMessages').toString() + ': '}
        extremeText={receiverPhone}
      />
    </View>
  );
};
