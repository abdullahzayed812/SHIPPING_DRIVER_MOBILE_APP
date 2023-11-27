import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PickupList } from '../../../screens/PickupList';
import { PickupShipment } from '../../../screens/PickupShipment';
import { ScanShipment } from '../../../screens/ScanShipment';
import type { PickUpStackParamList } from '../../types';

const PickUpStack = createNativeStackNavigator<PickUpStackParamList>();

export const PickUpStackScreen: React.FC = () => {
  return (
    <PickUpStack.Navigator
      initialRouteName="PickupList"
      screenOptions={{ headerShown: false }}
    >
      <PickUpStack.Screen name="PickupList" component={PickupList} />
      <PickUpStack.Screen name="PickupShipment" component={PickupShipment} />
      <PickUpStack.Screen name="ScanShipment" component={ScanShipment} />
    </PickUpStack.Navigator>
  );
};
