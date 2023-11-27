import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Scan } from '../../../screens/Scan';
import { BulkPickup } from '../../../screens/BulkPickup';
import type { ScanStackParamList } from '../../types';
import { ScanShipmentByCamera } from '../../../screens/ScanShipmentByCamera';
import { ScanShipmentByScanner } from '../../../screens/ScanShipmentByScanner';
import { ScannedShipmentsList } from '../../../screens/ScannedShipmentList';

const ScanStack = createNativeStackNavigator<ScanStackParamList>();

export const ScanStackScreen: React.FC = () => {
  return (
    <ScanStack.Navigator
      initialRouteName="ScanScreen"
      screenOptions={{ headerShown: false }}
    >
      <ScanStack.Screen name="ScanScreen" component={Scan} />
      <ScanStack.Screen name="BulkPickup" component={BulkPickup} />
      <ScanStack.Screen
        name="ScanShipmentByCamera"
        component={ScanShipmentByCamera}
      />
      <ScanStack.Screen
        name="ScanShipmentByScanner"
        component={ScanShipmentByScanner}
      />
      <ScanStack.Screen
        name="ScannedShipmentsList"
        component={ScannedShipmentsList}
      />
    </ScanStack.Navigator>
  );
};
