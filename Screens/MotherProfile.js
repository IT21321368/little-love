import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MotherQRCode from './QRcodeGenarater';

// Import icons (you may need to add the icon image URLs)
const profileIcon = require('../assets/user.png'); // Replace with the URL of the profile icon image
const qrCodeIcon = require('../assets/qr-code.png') // Replace with the URL of the QR code icon image

function MotherProfile() {
    const navigation = useNavigation();
    const route = useRoute();
  
    // Define a function to navigate to the QR code scanning screen
    const navigateToQRcode= () => {
      if (route.params && route.params.registeredNo) {
        navigation.navigate('QR Code', {
          registeredNo: route.params.registeredNo,
        });
      } else {
        // Handle the case when registeredNo is not available
      }
    };

     // Define a function to navigate to the MotherProfileDetails screen
  const navigateToMotherProfileDetails = () => {
    if (route.params && route.params.registeredNo) {
      navigation.navigate('Mother Profile Details', {
        registeredNo: route.params.registeredNo,
      });
    } else {
      // Handle the case when registeredNo is not available
    }
  };
  
    return (
      <View style={{ flex: 1 }}>
       
        <View style={{ backgroundColor: '#5BF6DB', padding: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
          <TouchableOpacity onPress={navigateToMotherProfileDetails}>
            <Image source={ profileIcon } style={{ width: 30, height: 30 ,marginTop:30}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToQRcode}>
            <Image source={ qrCodeIcon } style={{ width: 30, height: 30,marginTop:30 }} />
          </TouchableOpacity>
          {/* <MotherQRCode registeredNo={registeredNo} /> */}
          {/* <MotherQRCode registeredNo={route.params.registeredNo} /> */}
        </View>
        </View>
  
        {/* Mother profile content */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Mother Profile</Text>
          {/* Add more content specific to the mother's profile */}
        </View>
      </View>
    );
  }
  
  export default MotherProfile;
  