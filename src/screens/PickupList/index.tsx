import { RouteProp } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, FlatList, Image } from 'react-native';
import { Header } from '../../components/Common/Header';
import { Loading } from '../../components/Loading';
import { ButtonTabs } from '../../components/Pickup/ButtonTabs';
import { NumberOfShipment } from '../../components/Pickup/NumberOfShipment';
import { PickupListItem } from '../../components/Pickup/PickupListItem';
import { loadUserData } from '../../helpers/asyncStorage';
import { IMAGES } from '../../helpers/images';
import i18n from '../../helpers/language';
import { PickUpStackParamList } from '../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getPickupHistory } from '../../redux/pickup/pickupHistorySlice';
import { getPickupList } from '../../redux/pickup/pickupListSlice';
import { globalStyle } from '../../utils/globalStyles/globalStyles';
import { styles } from './style';

interface Props {
  route: RouteProp<PickUpStackParamList, 'PickupList'>;
}

const renderItem = ({ item }: any) => {
  return (
    <PickupListItem
      id={item.id}
      totalAWB={item.shipment_count}
      drsId={item.barcode}
      date={item.created_at.date.split(' ')[0]}
      time={item.created_at.date.split(' ')[1]}
    />
  );
};

export const PickupList: React.FC<Props> = ({
  route: { params: isPickupList },
}) => {
  const { pickupList, pickupListLoading } = useAppSelector(
    state => state.pickupList,
  );

  const { pickupHistory, pickupHistoryLoading } = useAppSelector(
    state => state.pickupHistory,
  );

  const dispatch = useAppDispatch();

  const pickupListRequestData = {
    page: '1',
    per_page: '5',
    barcode: '',
  };

  const loadPickupList = async () => {
    try {
      if (isPickupList) {
        await getPickupList(dispatch, pickupListRequestData);
      } else {
        await getPickupHistory(dispatch, pickupListRequestData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    loadPickupList();
  }, []);

  return (
    <>
      <Header logoImageSource={IMAGES.logo} />
      <View style={styles.container}>
        <NumberOfShipment
          number={isPickupList ? pickupList.length : pickupHistory.length}
          type={i18n.t('shipments').toString()}
        />
        {pickupListLoading || pickupHistoryLoading ? (
          <Loading />
        ) : isPickupList && pickupList?.length > 0 ? (
          <FlatList
            data={pickupList}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={globalStyle.flatListContentContainerStyle}
          />
        ) : !isPickupList && pickupHistory?.length > 0 ? (
          <FlatList
            data={pickupHistory}
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
