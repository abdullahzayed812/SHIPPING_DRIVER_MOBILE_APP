import React, { useState } from 'react';
import { InputField } from '../../components/Common/InputField';
import { CustomButton } from '../../components/Common/CustomButton';
import { Text, View } from 'react-native';
import { styles } from './style';
import { takePhoto } from '../../utils/global';
import { PickupModal } from '../../components/Pickup/PickupModal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RouteProp } from '@react-navigation/native';
import { OrdersStackParamList } from '../../navigation/types';
import { colors } from '../../helpers/colors';
import { Loading } from '../../components/Loading';
import { updatePickupShipment } from '../../redux/pickup/updatePickupShipmentSlice';

export interface UpdatePickupShipmentReqData {
  drs_id?: number;
  awbs?: string[];
  signatureImage?: string;
  imageUrl?: string | undefined;
}

interface Props {
  route: RouteProp<OrdersStackParamList, 'ScanAndPickup'>;
}

export const ScanAndPickup: React.FC<Props> = ({ route }) => {
  const [awb, setAwb] = useState<string>('');
  const [changeContent, setChangeContent] = useState<boolean>(false);
  const [photo, setPhoto] = useState<string | undefined>('');
  const [signature, setSignature] = useState<string>('');
  const [showSignature, setShowSignature] = useState<boolean>(false);

  const { loading } = useAppSelector(state => state.updatePickupShipment);

  const { drsId } = route.params;

  const dispatch = useAppDispatch();

  const handleNextPress = () => {
    setChangeContent(true);
  };

  const handleScanAndPickupRequest = async () => {
    const scanAndPickupReqData: UpdatePickupShipmentReqData = {
      drs_id: drsId,
      awbs: [awb],
      signatureImage: signature,
      imageUrl: photo,
    };
    await updatePickupShipment(dispatch, scanAndPickupReqData);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {!changeContent ? (
        <View>
          <InputField
            placeholder="Enter awb shipment"
            value={awb}
            setValue={setAwb}
          />
          <CustomButton title="Next" onPress={handleNextPress} />
        </View>
      ) : (
        <View>
          <View style={styles.awbBox}>
            <Text style={styles.awbText}>
              AWB: {awb ? awb : "You didn't pick up any shipments!"}
            </Text>
          </View>
          <CustomButton
            title="Try Again"
            buttonStyle={styles.tryAgainButton}
            onPress={() => setChangeContent(false)}
          />
          {awb ? (
            <View style={styles.buttonBox}>
              <CustomButton
                title="Take Photo"
                buttonStyle={{
                  ...styles.buttonStyle,
                  backgroundColor: photo ? colors.green : colors.mainColor,
                }}
                onPress={() => takePhoto(setPhoto)}
              />
              <CustomButton
                title="Signature"
                buttonStyle={{
                  ...styles.buttonStyle,
                  backgroundColor: signature ? colors.green : colors.mainColor,
                }}
                onPress={() => setShowSignature(true)}
              />
            </View>
          ) : null}
          {photo && signature && awb ? (
            <CustomButton
              title="Update"
              buttonStyle={styles.tryAgainButton}
              onPress={handleScanAndPickupRequest}
            />
          ) : null}
        </View>
      )}
      <PickupModal
        pickupShipment
        showModal={showSignature}
        toggleShowModal={() => setShowSignature(false)}
        setSignatureResult={setSignature}
      />
    </View>
  );
};
