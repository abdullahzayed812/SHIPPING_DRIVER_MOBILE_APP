import React from 'react';
import {
  Dimensions,
  View,
  Platform,
  Linking,
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import Styles from './style';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections, {
  MapViewDirectionsWaypoints,
} from 'react-native-maps-directions';
import { calcFont, calcWidth } from '../../helpers/sizes';
import R from 'ramda';
import I18n from '../../helpers/language';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMAGES } from '../../helpers/images';
import { request, PERMISSIONS } from 'react-native-permissions';
import GetLocation from 'react-native-get-location';
import { getShipmentDiraction } from '../../redux/DRS/shipmentDestinationSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { colors } from '../../helpers/colors';
import axios from 'axios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OrdersStackParamList } from '../../navigation/types';
import { RouteProp } from '@react-navigation/native';
const { width, height } = Dimensions.get('screen');

interface Props {
  navigation: NativeStackNavigationProp<OrdersStackParamList, 'DRSDestination'>;
  route: RouteProp<OrdersStackParamList, 'DRSDestination'>;
}

export const DRSDestination: React.FC<Props> = ({ route, navigation }) => {
  const [WayPointOrder, setWayPointOrder] = React.useState<any>([]);
  const [now_lat, setNowLat] = React.useState<number | undefined>(1);
  const [now_lng, setNowLng] = React.useState<number | undefined>(1);
  const [chick, setCheck] = React.useState(false);

  const { dataSource } = useAppSelector(state => state.shipmentDestination);
  const dispatch = useAppDispatch();
  const { drsId } = route.params;
  const driver_location = dataSource?.driver_location;
  const center = { latitude: 24.3902, longitude: 46.4937 };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyAbzST6gOX5cU-EZr4f6LlPlyH0crvaL0I';

  React.useEffect(() => {
    getDate();
    getMyLocation();
  }, []);

  // get array of shipments with request
  const getDate = async () => {
    await getShipmentDiraction(dispatch, drsId);
  };
  // get curren location
  const getMyLocation = () => {
    request(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        : PERMISSIONS.IOS.LOCATION_ALWAYS,
    ).then(result => {
      if (result == 'granted') {
        GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000,
        })
          .then(location => {
            setNowLat(location.latitude);
            setNowLng(location.longitude);
          })
          .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
          });
      } else if (result == 'blocked') {
        console.log('result == blocked');
      }
    });
  };

  // open any marker(shipment) in google map
  const onMapPress = (lat: number, lng: number) => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${lat},${lng}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url!);
  };

  // send any shipment have wrong address
  // const sendWrongAddress = async shipments_filter_wrong_id => {
  //   setCheck(true);
  //   try {
  //     const response = await api.post(
  //       `mobile/api/drs/failed/shipments/addresses/${route.params.id}`,
  //       { shipments_ids: shipments_filter_wrong_id },
  //     );
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const sendWrongAddress = async (idArray: (number | undefined)[]) => {
    setCheck(true);
    console.log('eeeeeeeeeeeeeeee');
    try {
      const response = await axios.post(
        `mobile/api/drs/failed/shipments/addresses/${drsId}`,
        { shipments_ids: idArray },
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  let shipments_filter_map: {
    latitude: number | undefined;
    longitude: number | undefined;
    address: string | undefined;
    awb: string | undefined;
    status: number | undefined;
  }[] = []; // array for use sort
  let shipments_filter_wrong_id: (number | undefined)[] = []; // array for api request
  let shipments_filter_wrong_awb: (string | undefined)[] = []; // array use for view

  for (let data = 0; data < dataSource.data?.length; data++) {
    if (
      dataSource.data[data].status != 7 &&
      dataSource.data[data].status != 13
    ) {
      // here have any shipment have status != 7,13
      if (
        dataSource.data[data].receiver_lat! > 0 &&
        dataSource.data[data].receiver_lng! > 0
      ) {
        // here have any shipment have receiver_lat,receiver_lng
        // create new array (this is array will use for map sort)
        shipments_filter_map.push({
          latitude: dataSource.data[data].receiver_lat,
          longitude: dataSource.data[data].receiver_lng,
          address: dataSource.data[data].receiver_address,
          awb: dataSource.data[data].awb,
          status: dataSource.data[data].status,
        });
      } else {
        // create new array for id (this is array will use for api request)
        shipments_filter_wrong_id.push(dataSource.data[data].id);
        // create new array for awb (this is array will use for view)
        shipments_filter_wrong_awb.push(dataSource.data[data].awb);
      }
    }
  }

  let shipments_for_diraction: MapViewDirectionsWaypoints[] = [];
  let shipments_for_markers = [];
  let markers_sorting = [];
  let startPoint = false; // select start point
  let shipments_for_storage = [];

  for (let diract = 0; diract < shipments_filter_map.length; diract++) {
    // create new array for waypoints (this is array will use for waypoints paramter in MapViewDirections)
    shipments_for_diraction.push({
      latitude: shipments_filter_map[diract].latitude!,
      longitude: shipments_filter_map[diract].longitude!,
    });
    // create new array for sorting (this is array will use for sort marker)
    shipments_for_markers.push({
      id: diract,
      latitude: shipments_filter_map[diract].latitude
        ? shipments_filter_map[diract].latitude
        : null,
      longitude: shipments_filter_map[diract].longitude
        ? shipments_filter_map[diract].longitude
        : null,
      awb: shipments_filter_map[diract].awb,
      status: shipments_filter_map[diract].status,
    });
  }

  if (dataSource.data?.length > shipments_for_diraction?.length) {
    // startPoint is true when drs isn't new in kase -> start = current location
    // startPoint is false when drs is new in kase -> start = driver location
    startPoint = true;
  }

  const sortInsert = (acc: any, cur: any) => {
    // WayPointOrder is a sort array
    var c = WayPointOrder[0];
    if (c) {
      var toIdx = R.indexOf(cur.id, c);
      acc[toIdx] = cur;
      return acc;
    }
  };

  let sort = R.reduce(sortInsert, []);
  markers_sorting = sort(shipments_for_markers);

  if (markers_sorting) {
    // in here we need 2 shipments first for for open whatsapp
    if (markers_sorting.length > 2) {
      for (let p = 0; p <= 1; p++) {
        // creata array for open whatsapp shipment
        shipments_for_storage.push({
          awb: markers_sorting[p]?.awb,
        });
      }
    } else {
      for (let p = 0; p < markers_sorting.length; p++) {
        // creata array for open whatsapp shipment
        shipments_for_storage.push({
          awb: markers_sorting[p]?.awb,
        });
      }
    }
  }

  // creata array in AsyncStorage
  const _Async = async (shipments_for_storage: { awb: string }[]) => {
    await AsyncStorage.setItem(
      'mapSort',
      JSON.stringify(shipments_for_storage),
    );
  };
  _Async(shipments_for_storage);

  // open when the device location is deny
  const locationRequired = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={Boolean(now_lng && startPoint)}
      >
        <View style={Styles.modelView}>
          <Text style={Styles.modelTitle}>
            {I18n.t('LocationInformationRequired')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              setNowLng(+true);
            }}
            style={Styles.modelTouch}
          >
            <Text style={Styles.modelTExtTouch}>{I18n.t('Done')}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  // open when the any shipment have address wrong
  const shipmentAddressIsWrong = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={
          shipments_filter_wrong_id.length >= 1 &&
          !chick &&
          now_lng !== undefined
        }
      >
        <View style={Styles.modelView2}>
          <Text style={Styles.modelTitle2}>
            {I18n.t('ThisShipmentsAddressAreWrong')}
          </Text>
          <ScrollView>
            {shipments_filter_wrong_awb?.map((item, index) => {
              return (
                <Text key={`#${index}`} style={Styles.textItem}>
                  {I18n.t('Awb2')} {item}
                </Text>
              );
            })}
          </ScrollView>
          <TouchableOpacity
            onPress={() => sendWrongAddress(shipments_filter_wrong_id)}
            style={Styles.modelTouch2}
          >
            <Text style={Styles.modelTExtTouch}>{I18n.t('Done')}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <View style={{ width: width, height: height }}>
      {/* {locationRequired()} */}
      {shipmentAddressIsWrong()}
      {driver_location ? (
        <MapView
          initialRegion={{
            latitude: center.latitude,
            longitude: center.longitude,
            latitudeDelta: 3.0222,
            longitudeDelta: 3.0221,
          }}
          style={{ width: width, height: height }}
        >
          {!startPoint ? (
            <MapViewDirections
              apikey={GOOGLE_MAPS_APIKEY}
              origin={{
                latitude: driver_location?.start_location_lat,
                longitude: driver_location?.start_location_lng,
              }}
              destination={{
                latitude: driver_location?.end_location_lat,
                longitude: driver_location?.end_location_lng,
              }}
              waypoints={shipments_for_diraction}
              lineDashPattern={[47.12, 17.22]}
              strokeWidth={3}
              strokeColor={'red'}
              optimizeWaypoints={true}
              onReady={result => {
                setWayPointOrder(result.waypointOrder);
              }}
              onError={errorMessage => {
                console.log('GOT AN ERROR', errorMessage);
              }}
            />
          ) : now_lat !== 1 ? (
            <MapViewDirections
              apikey={GOOGLE_MAPS_APIKEY}
              origin={{
                latitude: now_lat!,
                longitude: now_lng!,
              }}
              destination={{
                latitude: driver_location?.end_location_lat,
                longitude: driver_location?.end_location_lng,
              }}
              waypoints={shipments_for_diraction}
              lineDashPattern={[47.12, 17.22]}
              strokeWidth={3}
              strokeColor={'blue'}
              optimizeWaypoints={true}
              onReady={result => {
                setWayPointOrder(result.waypointOrder);
              }}
              onError={errorMessage => {
                console.log('GOT AN ERROR', errorMessage);
              }}
            />
          ) : null}
          {!startPoint && driver_location ? (
            <Marker
              coordinate={{
                latitude: driver_location?.start_location_lat,
                longitude: driver_location?.start_location_lng,
              }}
              onCalloutPress={() =>
                onMapPress(
                  driver_location?.start_location_lat,
                  driver_location?.start_location_lng,
                )
              }
              title={I18n.t('StartPoint').toString()}
            >
              <View
                style={{
                  width: calcWidth(5),
                  height: calcWidth(5),
                  borderRadius: calcWidth(2.5),
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                }}
              >
                <Image
                  source={IMAGES.phone}
                  style={{
                    width: calcWidth(3),
                    height: calcWidth(3),
                  }}
                />
              </View>
            </Marker>
          ) : now_lat !== 1 ? (
            <Marker
              coordinate={{
                latitude: now_lat!,
                longitude: now_lng!,
              }}
              onCalloutPress={() => onMapPress(now_lat!, now_lng!)}
              title={I18n.t('StartPoint').toString()}
            >
              <View
                style={{
                  width: calcWidth(25),
                  height: calcWidth(25),
                  borderRadius: calcWidth(12.5),
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                }}
              >
                <Image
                  source={IMAGES.rightLineArrow}
                  style={{
                    width: calcWidth(15),
                    height: calcWidth(15),
                  }}
                />
              </View>
            </Marker>
          ) : null}

          {markers_sorting?.map((item: any, index: number) => {
            let x =
              item.status === 7
                ? colors.red
                : item.status === 11
                ? colors.red
                : item.status === 6
                ? colors.red
                : item.status === 34
                ? colors.red
                : item.status === 33
                ? colors.red
                : 'blue';
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                title={`${I18n.t('Awb2')} ${item.awb}`}
                onCalloutPress={() => onMapPress(item.latitude, item.longitude)}
              >
                <View
                  style={{
                    width: calcWidth(25),
                    height: calcWidth(25),
                    borderRadius: calcWidth(12.5),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: `${x}`,
                  }}
                >
                  <Text
                    style={{
                      fontSize: calcFont(14),
                      color: colors.white,
                    }}
                  >
                    {index + 1}
                  </Text>
                </View>
              </Marker>
            );
          })}
        </MapView>
      ) : null}
    </View>
  );
};

export default DRSDestination;
