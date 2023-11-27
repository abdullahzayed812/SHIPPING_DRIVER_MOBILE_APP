import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, Image, View} from 'react-native';
import {SubHeader} from '../../components/Pickup/SubHeader';
import {InputField} from '../../components/Common/InputField';
import {IMAGES} from '../../helpers/images';
import {styles} from './style';
import {InvoiceListItem} from '../../components/Invoice/InvoiceListItem';
import {globalStyle} from '../../utils/globalStyles/globalStyles';
import {Header} from '../../components/Common/Header';
import {getInvoicesList} from '../../redux/invoices/invoicesListSlice';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {filterData} from '../../utils/global';
import {Loading} from '../../components/Loading';
import i18n from '../../helpers/language';

const renderItem = ({item}: any) => {
  return (
    <InvoiceListItem
      id={item.id}
      number={item.invoice_number}
      amount={item.total_amount}
      year={item.year}
      count={item.shipment_count}
      month={item.month}
    />
  );
};

export const InvoiceList: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [flatListData, setFlatListData] = useState<[]>([]);
  const [filteredFlatListData, setFilteredFlatListData] = useState<[]>([]);

  const dispatch = useAppDispatch();

  const {invoicesList, invoicesListLoading} = useAppSelector(
    state => state.invoicesList,
  );

  const loadInvoicesList = async () => {
    await getInvoicesList(dispatch);
  };

  useLayoutEffect(() => {
    loadInvoicesList();
  }, []);

  useEffect(() => {
    setFlatListData(invoicesList);
  }, [invoicesList]);

  useEffect(() => {
    setFilteredFlatListData(flatListData);
  }, [flatListData]);

  useEffect(() => {
    const newFlatListData: any = filterData(
      flatListData,
      'invoice_number',
      inputValue,
    );
    setFilteredFlatListData(newFlatListData);
  }, [inputValue]);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <Header
        backImageSource={IMAGES.leftArrow}
        logoImageSource={IMAGES.logo}
      />
      <SubHeader text="Invoice List" />
      <View style={styles.container}>
        <InputField
          imageLeftViewSource={IMAGES.rightArrow}
          imageSource={IMAGES.search}
          placeholder={i18n.t('searchDrsCode').toString()}
          textLeftView="AWB"
          inputContainerStyle={styles.inputContainerStyle}
          value={inputValue}
          setValue={setInputValue}
        />
        {invoicesListLoading ? (
          <Loading />
        ) : filteredFlatListData.length > 0 ? (
          <FlatList
            data={filteredFlatListData}
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
