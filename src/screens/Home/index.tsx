import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableOpacityComponent,
  View,
} from 'react-native';
import { loadUserData } from '../../helpers/asyncStorage';
import { globalStyle } from '../../utils/globalStyles/globalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';
import { styles } from './style';
import { VERTICAL_SPACING } from '../../constants/spacing';
import { IMAGES } from '../../helpers/images';

interface Props {
  navigation: NativeStackNavigationProp<HomeStackParamList, 'HomeScreen'>;
}

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [userData, setUserData] = React.useState<any>();

  React.useLayoutEffect(() => {
    loadHomeScreenData();
  }, []);

  const loadHomeScreenData = async () => {
    try {
      const user = await loadUserData();
      setUserData(user);
    } catch (error) {
      console.log(error);
    }
  };

  const BOX_DATA = [
    {
      backgroundColor: '#fbebea',
      image: IMAGES.homeDrs,
      title: 'DRS List',
      handlePress: () =>
        navigation.navigate('OrdersStackScreen', {
          screen: 'DRSList',
          params: { isDRSList: true },
        }),
    },
    {
      backgroundColor: '#eae7f8',
      image: IMAGES.homeDrsHistory,
      title: 'DRS History',
      handlePress: () =>
        navigation.navigate('OrdersStackScreen', {
          screen: 'DRSList',
          params: { isDRSList: false },
        }),
    },
    {
      backgroundColor: '#cfecf4',
      image: IMAGES.homePickupList,
      title: 'Pickup List',
      handlePress: () =>
        navigation.navigate('PickupStackScreen', {
          screen: 'PickupList',
          params: { isPickupList: true },
        }),
    },
    {
      backgroundColor: '#eff7e4',
      image: IMAGES.homePickupHisotry,
      title: 'Pickup History',
      handlePress: () =>
        navigation.navigate('PickupStackScreen', {
          screen: 'PickupList',
          params: { isPickupList: false },
        }),
    },
    {
      backgroundColor: '#fff6e7',
      image: IMAGES.homeInvoicesList,
      title: 'Invoices List',
      handlePress: () =>
        navigation.navigate('InvoicesStackScreen', { screen: 'InvoiceList' }),
    },
    {
      backgroundColor: '#e7f8f2',
      image: IMAGES.homeScan,
      title: 'Scan',
      handlePress: () =>
        navigation.navigate('ScanStackScreen', { screen: 'ScanScreen' }),
    },
  ];

  return (
    <View style={styles.pageContainer}>
      <View style={styles.userInfoBox}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.welcomeText}>Hi {userData?.name}</Text>
            <Text style={styles.handImage}>👋</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <Text style={styles.userInfo}>{userData?.phone}</Text>
              <Text style={styles.userInfo}>{userData?.email}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProfileStackScreen', {
                  screen: 'ProfileScreen',
                })
              }
            >
              <Image source={IMAGES.pinY} style={styles.editProfileImage} />
            </TouchableOpacity>
          </View>
        </View>
        <Image source={IMAGES.userHome} style={styles.userImage} />
      </View>
      <FlatList
        data={BOX_DATA}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.box, { backgroundColor: item.backgroundColor }]}
            onPress={item.handlePress}
          >
            <View style={styles.boxImageContainer}>
              <Image source={item.image} style={styles.boxImage} />
            </View>
            <Text style={styles.boxTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
