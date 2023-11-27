import React, { useLayoutEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { NumberOfShipment } from '../../components/Pickup/NumberOfShipment';
import { SubHeader } from '../../components/Pickup/SubHeader';
import { CustomButton } from '../../components/Common/CustomButton';
import { styles } from './style';
import { PickupShipmentItem } from '../../components/Pickup/PickupShipmentItem';
import { PickupModal } from '../../components/Pickup/PickupModal';
import { globalStyle } from '../../utils/globalStyles/globalStyles';
import { IMAGES } from '../../helpers/images';
import { Header } from '../../components/Common/Header';
import { getPickupShipment } from '../../redux/pickup/pickupShipmentSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RouteProp } from '@react-navigation/native';
import { PickUpStackParamList } from '../../navigation/types';
import { Loading } from '../../components/Loading';
import i18n from '../../helpers/language';

interface Props {
  route: RouteProp<PickUpStackParamList, 'PickupShipment'>;
}

const renderItem = ({ item }: any, signatureResult: string) => {
  return (
    <PickupShipmentItem
      totalAWB={item.awb}
      date={item.created_at.date.split(' ')[0]}
      time={item.created_at.date.split(' ')[1]}
      receiverAddress={item.receiver_address}
      receiverPhone={item.receiver_phone}
      senderLat={item.sender_lat}
      senderLng={item.sender_lng}
      status={item.status}
      signatureResult={signatureResult}
    />
  );
};

export const PickupShipment: React.FC<Props> = ({ route }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [signatureResult, setSignatureResult] = useState<string>('');

  const { pickupShipment, loading } = useAppSelector(
    state => state.pickupShipment,
  );

  const dispatch = useAppDispatch();

  const pickupShipmentRequestData = {
    page: '1',
    per_page: '5',
    list: '0',
  };

  const loadPickupShipment = async () => {
    await getPickupShipment(
      dispatch,
      pickupShipmentRequestData,
      route.params.id,
    );
  };

  useLayoutEffect(() => {
    loadPickupShipment();
  }, []);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <Header
        backImageSource={IMAGES.leftArrow}
        logoImageSource={IMAGES.logo}
      />
      <SubHeader text={i18n.t('pickupShipments')} />
      <View style={styles.container}>
        <NumberOfShipment
          number={pickupShipment.length}
          type={i18n.t('item')}
        />
        <View style={styles.signatureBox}>
          <View style={styles.signatureTextBox}>
            <Text style={styles.signatureText}>
              {i18n.t('putYourSignature')}
            </Text>
            <Image source={IMAGES.rightLineArrow} />
          </View>
          <CustomButton
            title={i18n.t('signature').toString()}
            buttonStyle={styles.buttonStyle}
            onPress={toggleShowModal}
          />
        </View>
        {loading ? (
          <Loading />
        ) : pickupShipment.length > 0 ? (
          <FlatList
            data={pickupShipment}
            renderItem={item => renderItem(item, signatureResult)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={globalStyle.flatListContentContainerStyle}
          />
        ) : (
          <Image source={IMAGES.emptyList} style={styles.emptyListImg} />
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
