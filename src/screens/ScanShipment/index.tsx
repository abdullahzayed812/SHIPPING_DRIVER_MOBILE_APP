import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { CustomButton } from '../../components/Common/CustomButton';
import { Header } from '../../components/Common/Header';
import { SubHeader } from '../../components/Pickup/SubHeader';
import { IMAGES } from '../../helpers/images';
import i18n from '../../helpers/language';
import { PickUpStackParamList } from '../../navigation/types';
import { openCallApp, openGoogleMap } from '../../utils/global';
import { BarcodeScanRNCamera } from '../../components/Scanner';
import { styles } from './style';
import { updatePickupShipment } from '../../redux/pickup/updatePickupShipmentSlice';
import { useAppDispatch } from '../../redux/hooks';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  route: RouteProp<PickUpStackParamList, 'ScanShipment'>;
  navigation: NativeStackNavigationProp<PickUpStackParamList, 'ScanShipment'>;
}

export const ScanShipment: React.FC<Props> = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [scanResult, setScanResult] = React.useState('');

  const dispatch = useAppDispatch();

  const { awb } = route.params;

  const {
    receiverAddress,
    receiverPhone,
    senderLat,
    senderLng,
    signatureResult,
  } = route.params;

  const getScanerResult = async (bounds: any) => {
    setModalVisible(false);
    setScanResult(bounds.data);
  };

  const handleSubmit = async () => {
    const updatePickupShipmentData = {
      awbs: [scanResult],
      signatureImage: signatureResult,
    };

    if (awb === scanResult) {
      const updatePickupShipmentResponse = await updatePickupShipment(
        dispatch,
        updatePickupShipmentData,
      );
      if (updatePickupShipmentResponse?.status === 200) {
        if (updatePickupShipmentResponse?.data?.failed_shipments.length > 0) {
          Toast.show({
            type: 'error',
            text1: 'AWB not found',
            text2: 'You entered faild awb please try scan again',
          });
        } else {
          navigation.goBack();
        }
      } else {
        Toast.show({
          type: 'error',
          text1: 'AWB not found',
          text2: 'You entered faild awb please try scan again',
        });
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'You scanned wrong barcode',
        text2: 'Please retry to scan exact one',
      });
    }
  };

  const handleTryAgain = () => {
    setScanResult('');
    setModalVisible(true);
  };

  return (
    <>
      <Header
        backImageSource={IMAGES.leftArrow}
        logoImageSource={IMAGES.logo}
      />
      <SubHeader text={i18n.t('scanShipment')} />
      <View style={styles.container}>
        {!scanResult ? (
          <>
            <View style={styles.center}>
              <Image source={IMAGES.barcode} />
              <CustomButton
                title={i18n.t('scanShipment').toString()}
                buttonStyle={styles.buttonStyle}
                onPress={() => setModalVisible(true)}
              />
            </View>
            <View style={styles.line} />
            <View style={styles.scanTextBox}>
              <View style={styles.imageBox}>
                <Image source={IMAGES.location} />
                <Text style={styles.rowText}>{i18n.t('address')}: </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => openGoogleMap(`geo:${senderLat},${senderLng}`)}
                >
                  <Text style={styles.scanTextValue}>{receiverAddress}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.scanTextBox}>
              <View style={styles.imageBox}>
                <Image source={IMAGES.phone} />
                <Text style={styles.rowText}>{i18n.t('mobileNumber')}: </Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => openCallApp(receiverPhone)}>
                  <Text style={styles.scanTextValue}>{receiverPhone}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <View style={styles.awbContainer}>
            <View style={styles.awbBox}>
              <Text style={styles.awbText}>AWB: {scanResult}</Text>
            </View>
            <CustomButton
              title="Try Again"
              buttonStyle={{
                ...styles.awbButton,
                ...styles.tryAgainColor,
              }}
              onPress={handleTryAgain}
            />
            <CustomButton
              title="Submit"
              buttonStyle={styles.awbButton}
              onPress={handleSubmit}
            />
          </View>
        )}
      </View>
      <BarcodeScanRNCamera
        dataReceived={(data: any) => getScanerResult(data)}
        close={() => setModalVisible(false)}
        modalVisible={modalVisible}
      />
    </>
  );
};
