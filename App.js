import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './Screens/Home';
import Shop from './Screens/Shop';
import Registermid from './Screens/Registermid';
import Select from './Selection';
import Login from './Screens/Login';
import Registerseller from './Screens/Registerseller';
import Restpasswprd from './Screens/Resetpasssword';
import Loginseller from './Screens/Loginseller';
import Shopseller from './Screens/shopseller';
import Addclinicdetails from './Screens/Addclinicdetails';
import Addmother from './Screens/Addmother';
import AddHealthguides from './Screens/AddHealthguides';
import MotherProfile from './Screens/MotherProfile';
import MotherProDetails from './Screens/MotherProDetails';
import sellerprofile from './Screens/SellerProfile';
import QRcodeGenarater from './Screens/QRcodeGenarater';
import QRcode from './Screens/QRcode';
import QRCodeScanner from './Screens/QRcodeScanner';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Reset" component={Restpasswprd} />
        <Stack.Screen name="Shopseller" component={Shopseller} />
        <Stack.Screen name="Loginseller" component={Loginseller} />
        <Stack.Screen name="Select" component={Select} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Registermid" component={Registermid} />
        <Stack.Screen name="Registerseller" component={Registerseller} />
        <Stack.Screen name="Add Clinic Details" component={Addclinicdetails} />
        <Stack.Screen name="Add Mother" component={Addmother} />
        <Stack.Screen name="Add Health Guides" component={AddHealthguides} />
        <Stack.Screen name="Mother Profile" component={MotherProfile} />
        <Stack.Screen name="Mother Profile Details" component={MotherProDetails} />
        <Stack.Screen name="Seller Profile" component={sellerprofile} />
        <Stack.Screen name="QR Generator" component={QRcodeGenarater} />
        <Stack.Screen name="QR Code" component={QRcode} />
        <Stack.Screen name="QR Scan" component={QRCodeScanner} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
