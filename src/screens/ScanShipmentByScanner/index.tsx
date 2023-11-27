import { useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { AddMore } from '../../components/Scan/ScanShipment/AddMore';
import { Scanner } from '../../components/Scan/ScanShipment/Scanner';
import { ScanStackParamList } from '../../navigation/types';

interface Props {
  navigation: NativeStackNavigationProp<
    ScanStackParamList,
    'ScanShipmentByScanner'
  >;
}

let scannedShipments: string[] = [];

export const ScanShipmentByScanner: React.FC<Props> = ({ navigation }) => {
  const [scanned, setScanned] = React.useState<boolean>(false);
  const [scannerInputValue, setScannerInputValue] = React.useState<string>('');

  useFocusEffect(
    React.useCallback(() => {
      scannedShipments = [];
      setScannerInputValue('');
    }, [navigation]),
  );

  const handleScan = (scanResult: string) => {
    if (scanResult.length > 0) {
      setScannerInputValue(scanResult);
      setScanned(true);
      scannedShipments.push(scanResult);
    }
  };

  return scanned ? (
    <AddMore
      setScanned={setScanned}
      setScannerInputValue={setScannerInputValue}
      scannedShipments={scannedShipments}
    />
  ) : (
    <Scanner scannerInputValue={scannerInputValue} handleScan={handleScan} />
  );
};
