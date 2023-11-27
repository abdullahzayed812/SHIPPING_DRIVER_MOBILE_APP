import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { OrdersStackParamList } from '../../../navigation/types';
import { CustomButton } from '../../Common/CustomButton';
import { styles } from './style';

interface Props {
  text: string;
  textValue?: string | number;
  haveButton?: boolean;
  buttonTitle?: string;
  mapIcon?: any;
  drsId?: number | undefined;
}

export const SubHeader: React.FC<Props> = ({
  text,
  textValue,
  haveButton,
  buttonTitle,
  mapIcon,
  drsId,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<OrdersStackParamList>>();

  return (
    <View style={styles.subHeaderBox}>
      <Text style={styles.subHeaderText}>
        {text}
        {': '}
        {textValue ? (
          <Text style={styles.subHeaderTextValue}>{textValue}</Text>
        ) : null}
      </Text>
      {haveButton ? (
        <CustomButton
          title={buttonTitle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
        />
      ) : null}
      {mapIcon ? (
        <TouchableOpacity
          style={styles.mapIconBox}
          onPress={() => navigation.navigate('DRSDestination', { drsId })}
        >
          <Image source={mapIcon} style={styles.mapIconStyle} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
