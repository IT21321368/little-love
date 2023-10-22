import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text,TouchableOpacity ,Image,TextInput,ScrollView} from 'react-native';

function Shop() {
  
  const navigation = useNavigation();
  const backththehome = () => {
    navigation.navigate('Home');
  };
  const backtotheprofile = () => {
    navigation.navigate('Profile');
  };
  
  const openimage = () => {
    console.log(img1);
    };
  const img1='https://firebasestorage.googleapis.com/v0/b/littlelove-e5353.appspot.com/o/download%20(10).jpeg?alt=media&token=20461f8a-ed08-4ae5-87ca-f263ff40bfae&_gl=1*ngg6x9*_ga*MjUxMjcxNTk5LjE2OTQ0OTI1Mzk.*_ga_CW55HF8NVT*MTY5NTkwNzM2OS4yOC4xLjE2OTU5MTE5MjkuNjAuMC4w';
  const img2='https://firebasestorage.googleapis.com/v0/b/littlelove-e5353.appspot.com/o/download%20(11).jpeg?alt=media&token=ad7ebbfd-ecb9-4774-a8c2-70b0900a0bae&_gl=1*nt3w5k*_ga*MjUxMjcxNTk5LjE2OTQ0OTI1Mzk.*_ga_CW55HF8NVT*MTY5NTkwNzM2OS4yOC4xLjE2OTU5MTE5NTguMzEuMC4w';
  return (
    <View style={{flex:1,}}>
      <Text style={{textAlign:'center',padding:60,fontSize:30,backgroundColor:'lightblue',fontWeight:'bold'}}>LittleLove</Text>
      <TextInput placeholder='Search Here' style={{padding:12,borderWidth:1.4,marginLeft:20,marginRight:20,marginTop:-50,borderRadius:15,color:'black'}} />
      <TouchableOpacity>
      <Image
  source={{uri: 'https://freesvg.org/img/magnifying-glass.png'}}
  style={{width: 76, height: 40,position:'absolute',right:10,marginTop:-45}}/>
      </TouchableOpacity>

        <View style={{flexDirection: 'row',justifyContent:'center',backgroundColor:'#FFF',borderWidth:2,borderColor:'#FFF',margin:15,borderRadius:20}}>
        <TouchableOpacity>
        <Image
  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-e5353.appspot.com/o/download%20(2).jpeg?alt=media&token=1b68003d-517d-46b2-b855-6420fccf792e&_gl=1*1ihwi68*_ga*MjUxMjcxNTk5LjE2OTQ0OTI1Mzk.*_ga_CW55HF8NVT*MTY5NTkwNzM2OS4yOC4xLjE2OTU5MDkxNjkuMzcuMC4w'}}
  style={{width: 60, height: 60,margin:20}}/>
  </TouchableOpacity>
    <TouchableOpacity>
  <Image
  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-e5353.appspot.com/o/download%20(3).jpeg?alt=media&token=9a9a1b20-3ad9-43ee-a8b7-26f5d9cc1d18&_gl=1*87t8gk*_ga*MjUxMjcxNTk5LjE2OTQ0OTI1Mzk.*_ga_CW55HF8NVT*MTY5NTkwNzM2OS4yOC4xLjE2OTU5MDkxOTUuMTEuMC4w'}}
  style={{width: 70, height: 70,margin:20}}/>
  </TouchableOpacity>
    <TouchableOpacity>
  <Image
  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-e5353.appspot.com/o/images%20(3).jpeg?alt=media&token=4e2aa355-3be4-40a5-9b8a-8313e3ba21ff&_gl=1*9yklqg*_ga*MjUxMjcxNTk5LjE2OTQ0OTI1Mzk.*_ga_CW55HF8NVT*MTY5NTkwNzM2OS4yOC4xLjE2OTU5MDk0OTguNTEuMC4w'}}
  style={{width: 60, height: 60,margin:20}}/>
  </TouchableOpacity>
  <TouchableOpacity>
  <Image
  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-e5353.appspot.com/o/images%20e(4).jpeg?alt=media&token=e7b0bc6b-72be-40dc-bc7d-254faae027e3&_gl=1*5ktvhm*_ga*MjUxMjcxNTk5LjE2OTQ0OTI1Mzk.*_ga_CW55HF8NVT*MTY5NTkwNzM2OS4yOC4xLjE2OTU5MDk1NTYuNjAuMC4w'}}
  style={{width: 60, height: 60,margin:20}}/>
  </TouchableOpacity>
        </View>



   <ScrollView style={{marginBottom:120}} >
<View style={{flexDirection:'row',justifyContent:'center'}}>

  <TouchableOpacity onPress={openimage} testID='img1'>
<Image
  source={{uri: img1}}
  style={{width: 180, height: 180,margin:10,borderRadius:20,borderWidth:2}}/>
  </TouchableOpacity>
  <TouchableOpacity>
  <Image
  source={{uri: img2}}
  style={{width: 180, height: 180,margin:10,borderRadius:20,borderWidth:2}}/>
  </TouchableOpacity>
</View>
<View style={{flexDirection:'row',justifyContent:'center'}}>
  <TouchableOpacity>
<Image
  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-e5353.appspot.com/o/download%20(10).jpeg?alt=media&token=20461f8a-ed08-4ae5-87ca-f263ff40bfae&_gl=1*ngg6x9*_ga*MjUxMjcxNTk5LjE2OTQ0OTI1Mzk.*_ga_CW55HF8NVT*MTY5NTkwNzM2OS4yOC4xLjE2OTU5MTE5MjkuNjAuMC4w'}}
  style={{width: 180, height: 180,margin:10,borderRadius:20,borderWidth:2}}/>
  </TouchableOpacity>
  <TouchableOpacity>
  <Image
  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-e5353.appspot.com/o/download%20(11).jpeg?alt=media&token=ad7ebbfd-ecb9-4774-a8c2-70b0900a0bae&_gl=1*nt3w5k*_ga*MjUxMjcxNTk5LjE2OTQ0OTI1Mzk.*_ga_CW55HF8NVT*MTY5NTkwNzM2OS4yOC4xLjE2OTU5MTE5NTguMzEuMC4w'}}
  style={{width: 180, height: 180,margin:10,borderRadius:20,borderWidth:2}}/>
  </TouchableOpacity>
</View>
<View style={{flexDirection:'row',justifyContent:'center'}}>
  <TouchableOpacity>
<Image
  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-e5353.appspot.com/o/download%20(10).jpeg?alt=media&token=20461f8a-ed08-4ae5-87ca-f263ff40bfae&_gl=1*ngg6x9*_ga*MjUxMjcxNTk5LjE2OTQ0OTI1Mzk.*_ga_CW55HF8NVT*MTY5NTkwNzM2OS4yOC4xLjE2OTU5MTE5MjkuNjAuMC4w'}}
  style={{width: 180, height: 180,margin:10,borderRadius:20,borderWidth:2}}/>
  </TouchableOpacity>
  <TouchableOpacity>
  <Image
  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-e5353.appspot.com/o/download%20(11).jpeg?alt=media&token=ad7ebbfd-ecb9-4774-a8c2-70b0900a0bae&_gl=1*nt3w5k*_ga*MjUxMjcxNTk5LjE2OTQ0OTI1Mzk.*_ga_CW55HF8NVT*MTY5NTkwNzM2OS4yOC4xLjE2OTU5MTE5NTguMzEuMC4w'}}
  style={{width: 180, height: 180,margin:10,borderRadius:20,borderWidth:2}}/>
  </TouchableOpacity>
</View>
<View style={{flexDirection:'row',justifyContent:'center'}}>
  <TouchableOpacity>
<Image
  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-e5353.appspot.com/o/download%20(10).jpeg?alt=media&token=20461f8a-ed08-4ae5-87ca-f263ff40bfae&_gl=1*ngg6x9*_ga*MjUxMjcxNTk5LjE2OTQ0OTI1Mzk.*_ga_CW55HF8NVT*MTY5NTkwNzM2OS4yOC4xLjE2OTU5MTE5MjkuNjAuMC4w'}}
  style={{width: 180, height: 180,margin:10,borderRadius:20,borderWidth:2}}/>
  </TouchableOpacity>
  <TouchableOpacity>
  <Image
  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-e5353.appspot.com/o/download%20(11).jpeg?alt=media&token=ad7ebbfd-ecb9-4774-a8c2-70b0900a0bae&_gl=1*nt3w5k*_ga*MjUxMjcxNTk5LjE2OTQ0OTI1Mzk.*_ga_CW55HF8NVT*MTY5NTkwNzM2OS4yOC4xLjE2OTU5MTE5NTguMzEuMC4w'}}
  style={{width: 180, height: 180,margin:10,borderRadius:20,borderWidth:2}}/>
  </TouchableOpacity>
</View>
</ScrollView>
  
    <View style={{background: 'rgb(238,174,202)',position:'absolute',bottom:10,backgroundColor:'lightblue',flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'flex-end'}} >
     <TouchableOpacity onPress={backththehome}>
      <Image
  source={{uri: 'https://freesvg.org/img/dynnamitt_home.png'}}
  style={{width: 40, height: 40,marginLeft:55,marginTop:30,marginRight:55,marginBottom:40}}/>
  </TouchableOpacity>
  <Image
  source={{uri: 'https://freesvg.org/img/grocery-15.png'}}
  style={{width: 40, height: 40,marginLeft:45,marginTop:30,marginRight:50,marginBottom:40}}/>
  <TouchableOpacity onPress={backtotheprofile}>
  <Image
  source={{uri: 'https://freesvg.org/img/1506603007.png'}}
  style={{width: 50, height: 40,marginLeft:55,marginTop:30,marginRight:50,marginBottom:40}}/>
  </TouchableOpacity>
    </View>
    </View>
  );
}
export default Shop;
