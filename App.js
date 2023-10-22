import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from './Screens/Home';
import Shop from './Screens/Shop';
import Profile from './Screens/Profile';
import Registermid from './Screens/Registermid';
import Select from './Selection';
import Login from './Screens/Login';
import Motherregister from './Screens/Motherregister';
import Registerseller from './Screens/Registerseller';
import Restpasswprd from './Screens/Resetpasssword';
import Loginseller from './Screens/Loginseller';
import Shopseller from './Screens/shopseller';
import Addclinicdetails from './Screens/Addclinicdetails';
import Addmother from './Screens/Addmother';
import AddHealthguides from './Screens/AddHealthguides';
// import DrawerScreen from './DrawerScreen';
// import AddHealthguides from './Screens/AddHealthguides';

const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Reset" component={Restpasswprd} />
        <Stack.Screen name="Shopseller" component={Shopseller} />
        <Stack.Screen name="Loginseller" component={Loginseller} />
        <Stack.Screen name="Motherresgiter" component={Motherregister} />
        <Stack.Screen name="Select" component={Select} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Registermid" component={Registermid} />
        <Stack.Screen name="Registerseller" component={Registerseller} />
        <Stack.Screen name="Add Clinic Details" component={Addclinicdetails} />
        <Stack.Screen name="Add Mother" component={Addmother} />
        <Stack.Screen name="Add Health Guides" component={AddHealthguides} />

        {/* Add the Drawer.Navigator here */}
        {/* <Stack.Screen name="Drawer" component={DrawerScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Create a component for the Drawer.Navigator
// function DrawerScreen() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Add Clinic Details" component={Addclinicdetails} />
//       <Drawer.Screen name="Add Mother" component={Addmother} />
//     </Drawer.Navigator>
//   );
// }

export default App;
