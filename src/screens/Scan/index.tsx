import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { CustomButton } from '../../components/Common/CustomButton';
import { Header } from '../../components/Common/Header';
import { IMAGES } from '../../helpers/images';
import i18n from '../../helpers/language';
import { HomeStackParamList } from '../../navigation/types';
import { styles } from './style';

interface Props {
  navigation: NativeStackNavigationProp<HomeStackParamList>;
}

export const Scan: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <Header
        backImageSource={IMAGES.leftArrow}
        logoImageSource={IMAGES.logo}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.subTitle}>{i18n.t('scanShipment')}</Text>
        <Text style={styles.text}>{i18n.t('scanShipmentText')}</Text>
        <Image source={IMAGES.scanner1} style={styles.image} />
        <View style={styles.scanButtonsContainer}>
          <CustomButton
            title={i18n.t('scanPickup').toString()}
            buttonStyle={styles.buttonStyle}
            outline
            scanSourceImg={IMAGES.scanner2}
            scanImageStyle={styles.scanImageStyle}
            onPress={() =>
              navigation.navigate('ScanStackScreen', {
                screen: 'ScanShipmentByScanner',
              })
            }
          />
          <CustomButton
            title={i18n.t('camera').toString()}
            buttonStyle={styles.buttonStyle}
            outline
            scanSourceImg={IMAGES.photo1}
            scanImageStyle={styles.scanImageStyle}
            onPress={() =>
              navigation.navigate('ScanStackScreen', {
                screen: 'ScanShipmentByCamera',
              })
            }
          />
        </View>
        <CustomButton
          title={i18n.t('bulkPickup').toString()}
          buttonStyle={{ ...styles.buttonStyle, width: '90%' }}
          outline
          scanSourceImg={IMAGES.trolley}
          scanImageStyle={styles.scanImageStyle}
          onPress={() =>
            navigation.navigate('ScanStackScreen', { screen: 'BulkPickup' })
          }
        />
      </ScrollView>
    </>
  );
};
