import React from 'react';
import { Text } from 'react-native';
import i18n from '../../../helpers/language';
import { styles } from './style';

interface Props {
  number: string;
}

export const StepText: React.FC<Props> = ({ number }) => {
  return (
    <Text style={styles.stepText}>
      {i18n.t('step') + ' '} <Text style={styles.number}>{number}</Text>/2
    </Text>
  );
};
