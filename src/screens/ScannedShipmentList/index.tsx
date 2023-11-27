import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { CustomButton } from '../../components/Common/CustomButton';
import { Loading } from '../../components/Loading';
import { PickupModal } from '../../components/Pickup/PickupModal';
import { AddFaild } from '../../components/Scan/BulkScan/AddFaild';
import { AddSuccess } from '../../components/Scan/BulkScan/AddSucess';
import { NotFound } from '../../components/Scan/BulkScan/NotFound';
import i18n from '../../helpers/language';
import { ScanStackParamList } from '../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { pickupShipmentScanReq } from '../../redux/pickup/pickupShipmentScanSlice';
import { styles } from './style';

interface Props {
  navigation: NativeStackNavigationProp<
    ScanStackParamList,
    'ScannedShipmentsList'
  >;
  route: RouteProp<ScanStackParamList, 'ScannedShipmentsList'>;
}

const renderItem = ({ item }: ListRenderItemInfo<string>) => {
  return (
    <View style={styles.awbBox}>
      <Text style={styles.awbText}>AWB: {item}</Text>
    </View>
  );
};

export const ScannedShipmentsList: React.FC<Props> = ({
  navigation,
  route,
}) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [signatureResult, setSignatureResult] = React.useState<string>('');
  const [showFlastList, setShowFlastList] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { scannedShipments } = route.params;

  const { loading, statusCode } = useAppSelector(
    state => state.pickupShipmentScan,
  );

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async () => {
    setShowFlastList(true);
    const pickupShipmentsRequestData = {
      awbs: scannedShipments,
      signatureImage: signatureResult,
    };
    await pickupShipmentScanReq(dispatch, pickupShipmentsRequestData);
  };

  const handleTryAgain = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        {loading ? (
          <Loading />
        ) : statusCode === 200 && showFlastList ? (
          <AddSuccess
            setSignature={setSignatureResult}
            setTryAddAgain={handleTryAgain}
          />
        ) : statusCode === 201 && showFlastList ? (
          <AddFaild />
        ) : statusCode === 404 && showFlastList ? (
          <NotFound
            handleTryAgain={handleTryAgain}
            titleText="shipmentNotFoundText"
          />
        ) : statusCode === 500 && showFlastList ? (
          <NotFound
            handleTryAgain={handleTryAgain}
            titleText="connectionFaild"
          />
        ) : (
          <FlatList
            data={scannedShipments}
            renderItem={renderItem}
            ListFooterComponent={
              <>
                <CustomButton
                  title="Signature"
                  buttonStyle={styles.buttonStyle}
                  onPress={toggleShowModal}
                />
                {signatureResult ? (
                  <CustomButton
                    title="Submit"
                    buttonStyle={styles.buttonStyle}
                    onPress={handleSubmit}
                  />
                ) : null}
              </>
            }
            ListFooterComponentStyle={{ alignItems: 'center' }}
          />
        )}
      </View>
      <PickupModal
        toggleShowModal={toggleShowModal}
        showModal={showModal}
        pickupShipment
        text={i18n.t('putYourSignature').toString()}
        setSignatureResult={setSignatureResult}
      />
    </>
  );
};
