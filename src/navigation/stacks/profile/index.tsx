import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../../../screens/Profile';
import type { ProfileStackParamList } from '../../types';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileStackScreen: React.FC = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={Profile} />
    </ProfileStack.Navigator>
  );
};
