import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ShipmentList } from '../../../screens/ShipmentList';
import { ShipmentDetails } from '../../../screens/ShipmentDetails';
import type { OrdersStackParamList } from '../../types';
import { ReadyForReversePickupScan } from '../../../screens/ReadyForReversePickupScan';
import { NotPickup } from '../../../screens/ReverseNotPickup';
import { ScanAndPickup } from '../../../screens/ScanAndPickup';
import { SearchByScanShipment } from '../../../screens/SearchByScanShipment';
import { DRSDestination } from '../../../screens/DRSDestination';
import { DRSList } from '../../../screens/DRSList';

const OrdersStack = createNativeStackNavigator<OrdersStackParamList>();

export const OrdersStackScreen: React.FC = () => {
  return (
    <OrdersStack.Navigator
      initialRouteName="DRSList"
      screenOptions={{ headerShown: false }}
    >
      <OrdersStack.Screen name="DRSList" component={DRSList} />
      <OrdersStack.Screen name="ShipmentList" component={ShipmentList} />
      <OrdersStack.Screen name="ShipmentDetails" component={ShipmentDetails} />
      <OrdersStack.Screen
        name="ReadyForReversePickupScan"
        component={ReadyForReversePickupScan}
      />
      <OrdersStack.Screen name="NotPickup" component={NotPickup} />
      <OrdersStack.Screen name="ScanAndPickup" component={ScanAndPickup} />
      <OrdersStack.Screen
        name="SearchByScanShipment"
        component={SearchByScanShipment}
      />
      <OrdersStack.Screen name="DRSDestination" component={DRSDestination} />
    </OrdersStack.Navigator>
  );
};
