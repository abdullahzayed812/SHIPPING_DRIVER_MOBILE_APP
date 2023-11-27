import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { CustomButton } from '../../components/Common/CustomButton';
import { Header } from '../../components/Common/Header';
import { IMAGES } from '../../helpers/images';
import { OrdersStackParamList, TabsParamList } from '../../navigation/types';
import { openCallApp, openGoogleMap } from '../../utils/global';
import { styles } from './style';

interface Props {
  navigation: NativeStackNavigationProp<TabsParamList, 'Orders'>;
  route: RouteProp<OrdersStackParamList, 'ReadyForReversePickupScan'>;
}

export const ReadyForReversePickupScan: React.FC<Props> = ({
  navigation,
  route,
}) => {
  const { receiverPhone, senderLat, senderLng, drsId, shipmentId } =
    route.params;

  return (
    <>
      <Header
        backImageSource={IMAGES.leftArrow}
        logoImageSource={IMAGES.logo}
      />
      <View style={styles.container}>
        <Image source={IMAGES.barcode} style={styles.image} />
        <CustomButton
          title="Scan And Pickup"
          buttonStyle={styles.buttonStyle}
          onPress={() =>
            navigation.navigate('Orders', {
              screen: 'ScanAndPickup',
              params: { drsId },
            })
          }
        />
        <CustomButton
          title="Not Pickup"
          buttonStyle={styles.buttonStyle}
          outline
          onPress={() =>
            navigation.navigate('Orders', {
              screen: 'NotPickup',
              params: { drsId, shipmentId },
            })
          }
        />
        <View style={styles.locationBox}>
          <TouchableOpacity onPress={() => openCallApp(receiverPhone)}>
            <Image source={IMAGES.call} style={styles.locationImage} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openGoogleMap(`geo:${senderLat}${senderLng}`)}
          >
            <Image source={IMAGES.locationMap} style={styles.locationImage} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
