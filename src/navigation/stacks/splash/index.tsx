import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { SplashStackParamList } from "../../types";
import { ChooseLangScreen } from "../../../screens/ChooseLangScreen";
import { SplashScreen } from "../../../screens/SplashScreen";
import { IntroductionScreen } from "../../../screens/Introduction";

const SplashStack = createNativeStackNavigator<SplashStackParamList>();

export const SplashStackScreen: React.FC = () => {
  return (
    <SplashStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <SplashStack.Screen name="SplashScreen" component={SplashScreen} />
      <SplashStack.Screen
        name="IntroductionScreen"
        component={IntroductionScreen}
      />
      <SplashStack.Screen
        name="ChooseLangScreen"
        component={ChooseLangScreen}
      />
    </SplashStack.Navigator>
  );
};
