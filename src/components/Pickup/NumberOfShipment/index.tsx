import React from 'react';
import { View, Text, Image } from 'react-native';
import { IMAGES } from '../../../helpers/images';
import i18n from '../../../helpers/language';
import { styles } from './style';

interface Props {
  number: number;
  type: string;
}

export const NumberOfShipment: React.FC<Props> = ({ number, type }) => {
  return (
    <View style={styles.numberBox}>
      <Image source={IMAGES.numberOfShipment} />
      <Text style={styles.number}>
        {i18n.t('numberOf')} {type}: {number}
      </Text>
    </View>
  );
};
