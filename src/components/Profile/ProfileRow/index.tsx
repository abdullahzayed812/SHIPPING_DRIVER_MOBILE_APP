import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle } from 'react-native';
import {
  removeAppLanguage,
  removeUserData,
} from '../../../helpers/asyncStorage';
import { colors } from '../../../helpers/colors';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { LanguageModal } from '../LanguageModal';

interface Props {
  leftImageSource: any;
  title: string;
  rightImageSource?: any;
  titleValue?: string;
  signOut?: boolean;
  language?: boolean;
  imageSize?: ViewStyle;
}

export const ProfileRow: React.FC<Props> = ({
  leftImageSource,
  title,
  rightImageSource,
  titleValue,
  signOut,
  language,
  imageSize,
}) => {
  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(false);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'AuthStackScreen'>
    >();

  const logout = async () => {
    try {
      await removeUserData();
      await removeAppLanguage();
      navigation.reset({ routes: [{ name: 'Splash' }] });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.profileRowBox}>
      <View style={styles.profileRowUpper}>
        {signOut ? (
          <TouchableOpacity style={styles.profileRowTitle} onPress={logout}>
            <Image source={leftImageSource} style={styles.img} />
            <Text
              style={[
                styles.profileRowTitleText,
                signOut && { color: colors.mainColor },
              ]}
            >
              {title}
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.profileRowTitle}>
            <Image
              source={leftImageSource}
              style={[
                styles.img,
                { width: imageSize?.width, height: imageSize?.height },
              ]}
            />
            <Text
              style={[
                styles.profileRowTitleText,
                signOut && { color: colors.mainColor },
              ]}
            >
              {title}
            </Text>
          </View>
        )}
        {rightImageSource && language ? (
          <TouchableOpacity onPress={() => setShowLanguageModal(true)}>
            <Image source={rightImageSource} style={styles.img} />
          </TouchableOpacity>
        ) : (
          <Image source={rightImageSource} style={styles.img} />
        )}
      </View>
      {titleValue ? (
        <Text style={styles.profileRowName}>{titleValue}</Text>
      ) : null}
      <LanguageModal
        showLanguageModal={showLanguageModal}
        setShowLanguageModal={setShowLanguageModal}
      />
    </View>
  );
};
