import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InvoiceDetails } from '../../../screens/IncoiceDetails';
import { InvoiceList } from '../../../screens/InvoiceList';
import type { InvoicesStackParamList } from '../../types';

const InvoicesStack = createNativeStackNavigator<InvoicesStackParamList>();

export const InvoicesStackScreen: React.FC = () => {
  return (
    <InvoicesStack.Navigator
      initialRouteName="InvoiceList"
      screenOptions={{ headerShown: false }}
    >
      <InvoicesStack.Screen name="InvoiceList" component={InvoiceList} />
      <InvoicesStack.Screen name="InvoiceDetails" component={InvoiceDetails} />
    </InvoicesStack.Navigator>
  );
};
