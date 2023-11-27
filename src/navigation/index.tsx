import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackScreen } from './stacks/auth';
import { SplashStackScreen } from './stacks/splash';
import type { RootStackParamList } from './types';
import { TabStackScreen } from './tabBar';

const RootStack = createNativeStackNavigator<RootStackParamList>();
export const navigationRef = createNavigationContainerRef();

export const RootStackScreen: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="Splash" component={SplashStackScreen} />
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
        <RootStack.Screen name="TabStackScreen" component={TabStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
