import React from 'react';
import { View } from 'react-native';
import { Header } from '../../components/Common/Header';
import { AddMore } from '../../components/Scan/ScanShipment/AddMore';
import BarcodeScanRNCamera from '../../components/Scanner';
import { IMAGES } from '../../helpers/images';
import { styles } from './style';

let cameraScannedShipments: string[] = [];

export const ScanShipmentByCamera: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(true);
  const [scanned, setScanned] = React.useState<boolean>(false);

  const getScannerResult = (bounds: any) => {
    cameraScannedShipments.push(bounds.data);
    setScanned(true);
  };

  const closeBarcodeScanner = () => {
    setModalVisible(false);
    setScanned(true);
  };

  return (
    <>
      <Header
        logoImageSource={IMAGES.logo}
        backImageSource={IMAGES.leftArrow}
      />
      <View style={styles.container}>
        <View style={styles.content}>
          {scanned ? (
            <AddMore
              setScanned={setScanned}
              scannedShipments={cameraScannedShipments}
              setModalVisible={setModalVisible}
            />
          ) : (
            <BarcodeScanRNCamera
              dataReceived={(data: any) => getScannerResult(data)}
              modalVisible={modalVisible}
              close={closeBarcodeScanner}
            />
          )}
        </View>
      </View>
    </>
  );
};
