import React from 'react';
import { Text } from 'react-native';
import i18n from '../../../../helpers/language';
import { styles } from './style';

interface Porps {
  shipmentReason: string;
  buttonTitle: string;
}

export const ShipmentReasonText: React.FC<Porps> = ({
  shipmentReason,
  buttonTitle,
}) => {
  return (
    <>
      {shipmentReason ? (
        <Text style={styles.shipmentReasonText}>
          {buttonTitle === i18n.t('delivered') ? '' : shipmentReason}
        </Text>
      ) : null}
    </>
  );
};
