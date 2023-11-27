import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../types';
import { CheckSMS } from '../../../screens/CheckSMS';
import { CreateNewAccount } from '../../../screens/CreateNewAccount';
import { CreateNewAccount2 } from '../../../screens/CreateNewAccount2';
import { ForgotPassword } from '../../../screens/ForgotPassword';
import { Login } from '../../../screens/Login';
import { SignUp } from '../../../screens/SignUp';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackScreen: React.FC = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignUp"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="CheckSMS" component={CheckSMS} />
      <AuthStack.Screen name="CreateNewAccount" component={CreateNewAccount} />
      <AuthStack.Screen
        name="CreateNewAccount2"
        component={CreateNewAccount2}
      />
    </AuthStack.Navigator>
  );
};
