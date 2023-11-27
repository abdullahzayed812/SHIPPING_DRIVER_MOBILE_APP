import React from 'react';
import { Text, View } from 'react-native';
import i18n from '../../../helpers/language';
import { styles } from './style';

interface Props {
  headerTittle: string;
}

export const DRSListItemHeader: React.FC<Props> = ({ headerTittle }) => {
  return (
    <>
      <View>
        <Text style={styles.drsItemHeaderText}>
          {i18n.t(headerTittle).toString()}
        </Text>
      </View>
      <View style={styles.line} />
    </>
  );
};
