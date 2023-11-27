import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, View } from 'react-native';
import { CustomButton } from '../../components/Common/CustomButton';
import { Loading } from '../../components/Loading';
import BarcodeScanRNCamera from '../../components/Scanner';
import { ShipmentListItem } from '../../components/Shipment/ShipmentListItem';
import { loadUserData } from '../../helpers/asyncStorage';
import { IMAGES } from '../../helpers/images';
import { OrdersStackParamList } from '../../navigation/types';
import { getScannedShipmentDRS } from '../../redux/DRS/searchDrsShipmentByscanSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { styles } from './style';

interface Props {
  navigation: NativeStackNavigationProp<
    OrdersStackParamList,
    'SearchByScanShipment'
  >;
  route: RouteProp<OrdersStackParamList, 'SearchByScanShipment'>;
}

export const SearchByScanShipment: React.FC<Props> = ({
  navigation,
  route,
}) => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [scannerResult, setScannerResult] = React.useState<string>('');

  const dispatch = useAppDispatch();

  const { drsId } = route.params;

  const { shipmentData } = useAppSelector(
    state => state.searchDrsShipmentBuScan,
  );

  const loadScannedShipmentDRS = async () => {
    const { id } = await loadUserData();

    const scannedShipmentDRSReqData = {
      driver_id: id,
      awb: scannerResult, // for testing get => first shipment awb [ PO222502185569612 ] for first drs
      drs_id: drsId,
    };

    await getScannedShipmentDRS(dispatch, scannedShipmentDRSReqData);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadScannedShipmentDRS();
    }, [navigation]),
  );

  const getScannerResult = async (bounds: any) => {
    setScannerResult(bounds.data);

    if (scannerResult) {
      await loadScannedShipmentDRS();
    }

    return;
  };

  return (
    <View style={styles.container}>
      <Image source={IMAGES.barcode} style={styles.barcodeImg} />
      <CustomButton
        title="Search"
        buttonStyle={styles.buttonStyle}
        onPress={() => setModalVisible(true)}
      />
      <BarcodeScanRNCamera
        dataReceived={getScannerResult}
        modalVisible={modalVisible}
        close={() => setModalVisible(false)}
      />
      {shipmentData?.id ? (
        <ShipmentListItem
          shipmentId={shipmentData.id}
          drsId={drsId}
          awb={shipmentData.awb}
          pieces={shipmentData.total_cod_amount}
          date={shipmentData.created_at.date.split(' ')[0]}
          time={shipmentData.created_at.date.split(' ')[1]}
          whatsAppMessages={shipmentData.receiver_phone}
          address={shipmentData.receiver_address}
          deliveredStatus={shipmentData.status}
          receiverPhone={shipmentData.receiver_phone}
          senderLat={shipmentData.sender_lat}
          senderLng={shipmentData.senderLng}
        />
      ) : null}
    </View>
  );
};
