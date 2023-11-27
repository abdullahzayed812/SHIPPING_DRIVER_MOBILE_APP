import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../../helpers/colors';
import { styles } from './style';

interface Props {
  size?: string;
}

export const Loading: React.FC<Props> = ({ size }) => {
  return (
    <View style={styles.loadingBox}>
      <ActivityIndicator
        size={size === 'small' ? 25 : 70}
        color={colors.mainColor}
      />
    </View>
  );
};
