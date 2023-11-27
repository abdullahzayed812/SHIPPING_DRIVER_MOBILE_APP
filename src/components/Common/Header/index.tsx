import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface Props {
  backImageSource?: any;
  logoImageSource?: any;
}

export const Header: React.FC<Props> = ({
  backImageSource,
  logoImageSource,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerBox}>
      {backImageSource ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backImageSource} style={styles.headerBack} />
        </TouchableOpacity>
      ) : null}
      {logoImageSource ? (
        <Image source={logoImageSource} style={styles.headerLogo} />
      ) : null}
    </View>
  );
};
