import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, FlatList, Image } from 'react-native';
import { SubHeader } from '../../components/Pickup/SubHeader';
import { InputField } from '../../components/Common/InputField';
import { styles } from './style';
import { IMAGES } from '../../helpers/images';
import { globalStyle } from '../../utils/globalStyles/globalStyles';
import { InvoiceDetailsItem } from '../../components/Invoice/InvoiceDetailsItem';
import { Header } from '../../components/Common/Header';
import { RouteProp } from '@react-navigation/native';
import { InvoicesStackParamList } from '../../navigation/types';
import { getInvoicesDetails } from '../../redux/invoices/invoicesDetailsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { filterData } from '../../utils/global';
import i18n from '../../helpers/language';
import { Loading } from '../../components/Loading';

interface Props {
  route: RouteProp<InvoicesStackParamList, 'InvoiceDetails'>;
}

const renderItem = ({ item }: any) => {
  return (
    <InvoiceDetailsItem
      awb={item.awb}
      amount={item.service_price}
      date={item.created_at.date.split(' ')[0]}
      time={item.created_at.date.split(' ')[1]}
    />
  );
};

export const InvoiceDetails: React.FC<Props> = ({ route }) => {
  const [flatListData, setFlatListData] = useState<[]>([]);
  const [filteredFlatListData, setFilteredFlatListData] = useState<[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const { id } = route.params;
  const dispatch = useAppDispatch();

  const { invoicesDetails, loading } = useAppSelector(
    state => state.invoicesDetails,
  );

  const data = { invoice_id: id };

  const loadInvoicesDetails = async () => {
    await getInvoicesDetails(dispatch, 0, data);
  };

  useLayoutEffect(() => {
    loadInvoicesDetails();
  }, []);

  useEffect(() => {
    setFlatListData(invoicesDetails);
  }, [invoicesDetails]);

  useEffect(() => {
    setFilteredFlatListData(flatListData);
  }, [flatListData]);

  useEffect(() => {
    const newFlatListData: any = filterData(flatListData, 'awb', inputValue);
    setFilteredFlatListData(newFlatListData);
  }, [inputValue]);

  return (
    <>
      <Header
        backImageSource={IMAGES.leftArrow}
        logoImageSource={IMAGES.logo}
      />
      <SubHeader
        text={i18n.t('invoicesDetails')}
        haveButton
        buttonTitle="Number: 10000004"
      />
      <View style={styles.container}>
        <InputField
          imageSource={IMAGES.search}
          imageLeftViewSource={IMAGES.rightArrow}
          inputContainerStyle={styles.inputContainerStyle}
          textLeftView="AWB"
          placeholder={i18n.t('searchInvoicesDetails').toString()}
          value={inputValue}
          setValue={setInputValue}
        />
        {loading ? (
          <Loading />
        ) : invoicesDetails.length > 0 ? (
          <FlatList
            data={filteredFlatListData}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom:
                globalStyle.flatListContentContainerStyle.paddingBottom * 1.5,
            }}
          />
        ) : (
          <Image source={IMAGES.emptyList} style={styles.emptyListImg} />
        )}
      </View>
    </>
  );
};
