import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { View ,Image,ScrollView,TouchableOpacity,Text,TextInput} from "react-native";
import { useRoute } from '@react-navigation/native';
import Profile from "./Profile";


function Home(){
  const route = useRoute();
  // const [clinicDetails, setClinicDetails] = useState([]);
  // const passedText = route.params?.passedText || "MW****";
  const { passedText, clinicDetails } = route.params || { passedText: 'MW****', clinicDetails: [] };

  const navigation = useNavigation();

  const backtoprofile = () => {
    navigation.navigate('Profile');
  };
  const backtotheshop = () => {
    navigation.navigate('Shop');
  };

  const navigateToAddClinicDetails = () => {
    navigation.navigate('Add Clinic Details');
  };

  const navigateToAddMother = () => {
    navigation.navigate('Add Mother');
  };
  const navigateToAddHealthGuides = () => {
    navigation.navigate('Add Health Guides');
  };
  
  const addDetails = (newDetails) => {
      // Add the new details to the state
      setClinicDetails([...clinicDetails, newDetails]);
    };

  
  return(

    <View style={{flex:1,}}>
    <Text style={{textAlign:'center',padding:60,fontSize:30,backgroundColor:'#5BF6DB',fontWeight:'bold'}}>Midwife Name</Text> 
    <Text style={{textAlign:'center',padding:10,fontSize:20,backgroundColor:'#5BF6DB',fontWeight:'bold',marginTop:-50}}>{passedText}</Text> 


    <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={navigateToAddClinicDetails}>
          <View style={{ borderRadius: 10, borderWidth: 2, borderColor: '#000000', padding: 9, margin: 8, backgroundColor: '#5BF6DB' ,height: 60, width: 120}}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000000',textAlign: 'center' }}>Add Clinic Details</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToAddMother}>
          <View style={{ borderRadius: 10, borderWidth: 2, borderColor: '#000000', padding: 10, margin: 9, backgroundColor: '#5BF6DB', height: 60, width: 120 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000000',textAlign: 'center' }}>Add Mother</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToAddHealthGuides}>
          <View style={{ borderRadius: 10, borderWidth: 2, borderColor: '#000000', padding: 10, margin: 9, backgroundColor: '#5BF6DB', height: 60, width: 120 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000000',textAlign: 'center' }}>Add Health Guides</Text>
          </View>
        </TouchableOpacity>
      </View>


      {/* <ScrollView> */}
        {/* Display the added clinic details */}
        {/* {clinicDetails.map((details, index) => (
          <View key={index}>
            <Text>Date: {details.clinicDate}</Text>
            <Text>Program: {details.clinicProgram}</Text>
            <Text>Vaccination: {details.vaccinationProgram}</Text>
            <Text>Nutrition Supplements: {details.nutritionSupplements}</Text>
          </View>
        ))}
      </ScrollView> */}
      {/* <AddClinicDetails addDetails={addDetails} /> */}
    {/* </View> */}

    <ScrollView>
        {/* Display the added clinic details in cards */}
        {clinicDetails.map((details, index) => (
          <View key={index} style={{ borderColor: 'black', borderWidth: 1, borderRadius: 10, padding: 10, margin: 10 }}>
            <Text>Date: {details.clinicDate}</Text>
            <Text>Program: {details.clinicProgram}</Text>
            <Text>Vaccination: {details.vaccinationProgram}</Text>
            <Text>Nutrition Supplements: {details.nutritionSupplements}</Text>
          </View>
        ))}
      </ScrollView>
   

  <View style={{background: 'rgb(238,174,202)',position:'absolute',bottom:10,backgroundColor:'#5BF6DB',flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'flex-end'}} >
   
   <TouchableOpacity >
    <Image
source={{uri: 'https://freesvg.org/img/dynnamitt_home.png'}}
style={{width: 40, height: 40,marginLeft:55,marginTop:30,marginRight:55,marginBottom:40}}/>
</TouchableOpacity>
<Image
source={{uri: 'https://freesvg.org/img/grocery-15.png'}}
style={{width: 40, height: 40,marginLeft:45,marginTop:30,marginRight:50,marginBottom:40}}/>
<TouchableOpacity>
<Image
source={{uri: 'https://freesvg.org/img/1506603007.png'}}
style={{width: 50, height: 40,marginLeft:55,marginTop:30,marginRight:50,marginBottom:40}}/>
</TouchableOpacity>

  </View>
  </View>
  )
}

export default Home;