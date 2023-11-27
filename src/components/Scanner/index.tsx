import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
  Modal,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { styles } from './style';
import { IMAGES } from '../../helpers/images';

interface Props {
  dataReceived: any;
  close: any;
  modalVisible: boolean;
}

const { width } = Dimensions.get('window');
const maskRowHeight = Math.round((900 - 300) / 15);
const maskColWidth = (width - 300) / 2;

export const BarcodeScanRNCamera: React.FC<Props> = ({
  dataReceived,
  close,
  modalVisible,
}) => {
  const cameraRef = React.useRef<null>(null);

  const onBarCodeRead = (scanResult: any) => {
    dataReceived(scanResult);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      style={{ margin: 100 }}
    >
      <View style={styles.container}>
        <RNCamera
          ref={cameraRef}
          flashMode={RNCamera.Constants.FlashMode.auto}
          onBarCodeRead={onBarCodeRead}
          zoom={0.2}
          style={styles.preview}
          type="back"
          captureAudio={false}
        />
        <View style={[styles.overlay]}>
          <TouchableOpacity style={styles.closeCircle} onPress={close}>
            <Image source={IMAGES.close} style={styles.close} />
          </TouchableOpacity>
          <Text style={styles.scanScreenMessage}>
            {'align_code_within_scan'}
          </Text>
        </View>

        <View style={styles.maskOutter}>
          <View
            style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]}
          />
          <View style={[styles.view, styles.maskCenter]}>
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
            <View style={styles.maskInner} />
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
          </View>

          <View
            style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]}
          />
        </View>
      </View>
    </Modal>
  );
};

export default BarcodeScanRNCamera;
