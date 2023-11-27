import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { styles } from './style';

interface Props {
  title: string;
  titleWrapperStyle?: ViewStyle;
}

export const PageTitle: React.FC<Props> = ({ title, titleWrapperStyle }) => {
  return (
    <View style={[styles.titleWrapper, titleWrapperStyle]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
