import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
function Select(){
    const navigation = useNavigation();
    const openmidwiferegform = () => {
        navigation.navigate('Registermid');
      };
      const openregstersellerform = () => {
        navigation.navigate('Registerseller'); 
      };
    return (
        <View
          style={{ backgroundColor: 'rgb(238,174,202)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LinearGradient
    colors={['rgba(238,174,202,1)', 'rgba(148,187,233,1)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}/>
          <TouchableOpacity onPress={openmidwiferegform} style={{borderRadius:30,borderWidth:2,borderColor:'#FFF',padding:15,margin:20,backgroundColor:'#000000'}}>
            <Text  style={{fontWeight:'bold',fontSize:20,color:'#FFF'}}>MidWife</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={openregstersellerform} style={{borderRadius:30,borderWidth:2,borderColor:'#FFF',padding:15,margin:20,backgroundColor:'#000000'}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'#FFF'}}>  Seller  </Text>
          </TouchableOpacity>
        </View>
      );
}

export default Select;