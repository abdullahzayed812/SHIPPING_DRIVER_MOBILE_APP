import React, { useState } from 'react';
import { View } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Header } from '../../components/Common/Header';
import { Loading } from '../../components/Loading';
import { PickupModal } from '../../components/Pickup/PickupModal';
import { AddFaild } from '../../components/Scan/BulkScan/AddFaild';
import { AddSuccess } from '../../components/Scan/BulkScan/AddSucess';
import { DefaultBulkScanView } from '../../components/Scan/BulkScan/DefaultBulkScanView';
import { NotFound } from '../../components/Scan/BulkScan/NotFound';
import { IMAGES } from '../../helpers/images';
import i18n from '../../helpers/language';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { pickupShipmentScanReq } from '../../redux/pickup/pickupShipmentScanSlice';
import { styles } from './style';

export interface PickupShipmentScanReqData {
  awbs: string[] | undefined;
  signatureImage: string;
}

export const BulkPickup: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tryAddAgain, setTryAddAgain] = useState<boolean>(true);
  const [signature, setSignature] = useState<string>('');
  const [awb, setAwb] = useState<string>('');

  const dispatch = useAppDispatch();

  const { loading, statusCode, countShipmentSuccess, failedShipments } =
    useAppSelector(state => state.pickupShipmentScan);

  const toggleShowModal = () => {
    setShowModal(false);
  };

  const handleTryAgain = () => {
    setTryAddAgain(false);
  };

  const submit = async () => {
    const pickupShipmentScanReqData: PickupShipmentScanReqData = {
      awbs: awb.split('\n').filter(awb => awb !== ''),
      signatureImage: signature,
    };

    setTryAddAgain(true);

    if (!signature) {
      Toast.show({
        type: 'error',
        text1: i18n.t('mustEnterSignature').toString(),
      });
      return;
    }

    await pickupShipmentScanReq(dispatch, pickupShipmentScanReqData);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header
        backImageSource={IMAGES.leftArrow}
        logoImageSource={IMAGES.logo}
      />
      <View style={styles.container}>
        {statusCode === 200 && tryAddAgain ? (
          <AddSuccess
            setTryAddAgain={setTryAddAgain}
            setSignature={setSignature}
          />
        ) : statusCode === 201 && tryAddAgain ? (
          <AddFaild />
        ) : statusCode === 404 && tryAddAgain ? (
          <NotFound
            handleTryAgain={handleTryAgain}
            titleText="shipmentNotFoundText"
          />
        ) : statusCode === 500 && tryAddAgain ? (
          <NotFound
            handleTryAgain={handleTryAgain}
            titleText="connectionFaild"
          />
        ) : (
          <DefaultBulkScanView
            awb={awb}
            setAwb={setAwb}
            signature={signature}
            setShowModal={setShowModal}
            submit={submit}
          />
        )}
      </View>
      <PickupModal
        pickupShipment
        showModal={showModal}
        toggleShowModal={toggleShowModal}
        setSignatureResult={setSignature}
      />
    </>
  );
};
