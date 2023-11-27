import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, FlatList, Image, ScrollView } from 'react-native';
import { InputField } from '../../components/Common/InputField';
import { NumberOfShipment } from '../../components/Pickup/NumberOfShipment';
import { styles } from './style';
import { DRSListItem } from '../../components/DRSList/DRSListItem';
import { globalStyle } from '../../utils/globalStyles/globalStyles';
import { IMAGES } from '../../helpers/images';
import { Header } from '../../components/Common/Header';
import { loadUserData } from '../../helpers/asyncStorage';
import { getDRSList } from '../../redux/DRS/drsListSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getDRSHistory } from '../../redux/DRS/drsHistorySlice';
import { Loading } from '../../components/Loading';
import i18n from '../../helpers/language';
import { OrdersStackParamList } from '../../navigation/types';
import { RouteProp } from '@react-navigation/native';

interface Props {
  route: RouteProp<OrdersStackParamList, 'DRSList'>;
}

const renderItem = ({ item }: any) => {
  return (
    <DRSListItem
      drsId={item.id}
      totalAWB={item.shipment_count}
      drsBarcode={item.barcode}
      date={item.created_at.date.split(' ')[0]}
      time={item.created_at.date.split(' ')[1]}
      posAmount={item.pos_amt}
      delivered={item.shipments_delivered}
      cashAmount={item.cash_amt}
    />
  );
};

export const DRSList: React.FC<Props> = ({ route: { params: isDRSList } }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const { drsList, DRSListLoading } = useAppSelector(state => state.drsList);
  const { drsHistory, DRSHistoryLoading } = useAppSelector(
    state => state.drsHistory,
  );

  const dispatch = useAppDispatch();

  const drsListRequestData = {
    page: '1',
    per_page: '5',
    barcode: inputValue ? inputValue : '',
  };

  const loadDRSList = async () => {
    try {
      if (isDRSList) {
        await getDRSList(dispatch, drsListRequestData);
      } else {
        await getDRSHistory(dispatch, drsListRequestData);
        console.log('Enter in drsHistory block');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    loadDRSList();
  }, []);

  useEffect(() => {
    if (inputValue.length > 3) {
      loadDRSList();
    } else if (inputValue.length === 0) {
      loadDRSList();
    }
  }, [inputValue]);

  if (DRSListLoading || DRSHistoryLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header logoImageSource={IMAGES.logo} />
      <View style={styles.container}>
        <InputField
          inputContainerStyle={styles.inputContainerStyle}
          placeholder={i18n.t('scanDrsCode').toString()}
          imageSource={IMAGES.search}
          value={inputValue}
          setValue={setInputValue}
        />
        <NumberOfShipment
          number={isDRSList ? drsList?.length : drsHistory?.length}
          type="Orders"
        />
        {drsList?.length > 0 && isDRSList ? (
          <FlatList
            data={drsList}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={globalStyle.flatListContentContainerStyle}
          />
        ) : drsHistory?.length > 0 && !isDRSList ? (
          <FlatList
            data={drsHistory}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={globalStyle.flatListContentContainerStyle}
          />
        ) : (
          <Image source={IMAGES.emptyList} style={styles.emptyListImg} />
        )}
      </View>
    </>
  );
};
