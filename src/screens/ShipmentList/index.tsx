import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SubHeader } from '../../components/Pickup/SubHeader';
import { CustomButton } from '../../components/Common/CustomButton';
import { InputField } from '../../components/Common/InputField';
import { NumberOfShipment } from '../../components/Pickup/NumberOfShipment';
import { styles } from './style';
import { IMAGES } from '../../helpers/images';
import { ShipmentListItem } from '../../components/Shipment/ShipmentListItem';
import { globalStyle } from '../../utils/globalStyles/globalStyles';
import { Header } from '../../components/Common/Header';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { OrdersStackParamList } from '../../navigation/types';
import { getShipmentList } from '../../redux/shipments/shipmentListSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// import { filterData, takePhoto } from '../../utils/global';
import { Loading } from '../../components/Loading';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import i18n from '../../helpers/language';

interface Props {
  navigation: NativeStackNavigationProp<OrdersStackParamList, 'ShipmentList'>;
  route: RouteProp<OrdersStackParamList, 'ShipmentList'>;
}

const renderItem = ({ item }: any, drsId: number) => {
  return (
    <ShipmentListItem
      shipmentId={item.id}
      drsId={drsId}
      awb={item.awb}
      pieces={item.total_cod_amount}
      date={item.created_at.date.split(' ')[0]}
      time={item.created_at.date.split(' ')[1]}
      whatsAppMessages={item.receiver_phone}
      address={item.receiver_address}
      deliveredStatus={item.status}
      receiverPhone={item.receiver_phone}
      senderLat={item.sender_lat}
      senderLng={item.senderLng}
    />
  );
};

export const ShipmentList: React.FC<Props> = ({ navigation, route }) => {
  const [flatListData, setFlatListData] = useState<[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [showSearchItemModal, setShowSearchItemModal] =
    useState<boolean>(false);
  const [selectedSearchItem, setSelectedSearchItem] = useState<string>('AWB');

  const dispatch = useAppDispatch();
  const { drsId, drsBarcode } = route.params;

  const { shipmentList, loading } = useAppSelector(state => state.shipmentList);

  const shipmentListRequestData = {
    page: 1,
    per_page: 5,
    awb: selectedSearchItem === 'AWB' ? inputValue : '',
    receiver_phone: selectedSearchItem === 'Receiver Phone' ? inputValue : '',
    search_by_index:
      selectedSearchItem === 'AWB'
        ? 0
        : selectedSearchItem === 'Receiver Phone'
        ? 2
        : 1,
  };

  const loadShipmentList = async () => {
    await getShipmentList(dispatch, drsId, shipmentListRequestData);
  };

  useFocusEffect(
    useCallback(() => {
      loadShipmentList();
    }, [navigation]),
  );

  useLayoutEffect(() => {
    loadShipmentList();
  }, []);

  useEffect(() => {
    setFlatListData(shipmentList);
  }, [shipmentList]);

  useEffect(() => {
    if (inputValue.length > 3) {
      loadShipmentList();
    } else if (inputValue.length === 0) {
      loadShipmentList();
    }
  }, [inputValue]);

  const selectSearchItem = (itemType: string) => {
    setSelectedSearchItem(itemType);
    setShowSearchItemModal(false);
  };

  const handleScannerPress = () => {
    navigation.navigate('SearchByScanShipment', { drsId });
  };

  return (
    <>
      <Header
        backImageSource={IMAGES.leftArrow}
        logoImageSource={IMAGES.logo}
      />
      <SubHeader
        text="Drs"
        textValue={drsBarcode}
        mapIcon={IMAGES.mapIcon}
        drsId={drsId}
      />
      <View style={styles.container}>
        <InputField
          imageLeftViewSource={IMAGES.rightArrow}
          imageSource={IMAGES.showPassword}
          placeholder={i18n.t(selectedSearchItem).toString()}
          textLeftView={selectedSearchItem}
          inputContainerStyle={styles.inputContainerStyle}
          value={inputValue}
          setValue={setInputValue}
          setShowSearchItemModal={setShowSearchItemModal}
          scannerImage={IMAGES.scanner}
          handleScannerPress={handleScannerPress}
        />
        <View style={styles.buttonBox}>
          <CustomButton
            title={i18n.t('scan').toString()}
            buttonStyle={styles.buttonStyle}
            scanSourceImg={IMAGES.whiteBarcode}
          />
          <CustomButton
            title={i18n.t('sortByLocation').toString()}
            buttonStyle={styles.buttonStyle}
            outlineStyle={styles.outlineButtonStyle}
            imageSource={IMAGES.difArrow}
            sortByLocation
            outline
          />
        </View>
        <NumberOfShipment
          number={flatListData?.length}
          type={i18n.t('orders')}
        />
        {loading ? (
          <Loading />
        ) : flatListData?.length > 0 ? (
          <FlatList
            data={flatListData}
            renderItem={item => renderItem(item, drsId)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={globalStyle.flatListContentContainerStyle}
          />
        ) : (
          <Image source={IMAGES.emptyList} style={styles.emptyListImg} />
        )}
      </View>
      <Modal visible={showSearchItemModal} animationType="fade" transparent>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => setShowSearchItemModal(false)}
        >
          <View style={styles.searchModalBox}>
            <TouchableOpacity onPress={() => selectSearchItem('AWB')}>
              <Text style={styles.searchModalText}>AWB</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectSearchItem('Receiver Phone')}
            >
              <Text style={styles.searchModalText}>Receiver Phone</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectSearchItem('DRS')}>
              <Text style={styles.searchModalText}>DRS</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
