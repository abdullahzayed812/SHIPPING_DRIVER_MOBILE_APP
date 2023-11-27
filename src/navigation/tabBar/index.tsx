import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../screens/Home";
import { TabStackParamList } from "../types";
import { InvoicesStackScreen } from "../stacks/invoices";
import { OrdersStackScreen } from "../stacks/orders";
import { PickUpStackScreen } from "../stacks/pickup";
import { ScanStackScreen } from "../stacks/scan";
import { Image } from "react-native";
import { calcFont } from "../../helpers/sizes";

const ROUTES = [
  "HomeScreen",
  "PickupStackScreen",
  "OrdersStackScreen",
  "ScanStackScreen",
  "ProfileStackScreen",
];

const TabStack = createBottomTabNavigator<TabStackParamList>();

export const TabStackScreen: React.FC = () => {
  return (
    <TabStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: { fontSize: calcFont(16) },
        tabBarActiveTintColor: "",
        tabBarIcon: ({ focused }) => {
          let iconName = "";
          ROUTES.forEach(screenRoute => {
            if (route.name === screenRoute) {
              iconName = focused ? "" : "";
            }
          });
          return <Image /* source={iconName as source image} */ />;
        },
      })}
    >
      <TabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <TabStack.Screen
        name="PickupStackScreen"
        component={PickUpStackScreen}
        options={{ tabBarLabel: "Pickup" }}
      />
      <TabStack.Screen
        name="OrdersStackScreen"
        component={OrdersStackScreen}
        options={{ tabBarLabel: "DRS" }}
      />
      <TabStack.Screen
        name="InvoicesStackScreen"
        component={InvoicesStackScreen}
        options={{ tabBarLabel: "Invoices" }}
      />
      <TabStack.Screen
        name="ScanStackScreen"
        component={ScanStackScreen}
        options={{ tabBarLabel: "Scan" }}
      />
    </TabStack.Navigator>
  );
};
