import React, { useState } from 'react';
import { View } from 'react-native';
import { colors } from '../../../helpers/colors';
import { useAppSelector } from '../../../redux/hooks';
import { CustomButton } from '../../Common/CustomButton';
import { styles } from './style';

interface Props {
  title_1?: string;
  title_2?: string;
  selectTab: (type: string) => void;
  listBackground: string;
  listColor: string;
  historyBackground: string;
  historyColor: string;
}

export const ButtonTabs: React.FC<Props> = ({
  title_1,
  title_2,
  selectTab,
  listBackground,
  listColor,
  historyBackground,
  historyColor,
}) => {
  return (
    <View style={styles.buttonsBox}>
      <CustomButton
        title={title_1}
        buttonStyle={{ ...styles.buttonStyle, backgroundColor: listBackground }}
        titleStyle={{ color: listColor }}
        onPress={() => selectTab('list')}
      />
      <CustomButton
        title={title_2}
        buttonStyle={{
          ...styles.buttonStyle,
          backgroundColor: historyBackground,
        }}
        titleStyle={{ color: historyColor }}
        onPress={() => selectTab('history')}
      />
    </View>
  );
};
