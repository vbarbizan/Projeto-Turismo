import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './pages/Login';
import Feed from './pages/Feed';
import Details from './pages/Details'
import CidadeButton from "./components/CidadeButton";
import Profile from "./pages/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
}