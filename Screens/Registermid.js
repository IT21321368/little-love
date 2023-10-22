// HomeScreen.js
import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useNavigation } from '@react-navigation/native';
import { firebaseConfig } from '../FirebaseConfig';
import { ref, set } from 'firebase/database';
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../FirebaseConfig';
import { View, Text,TextInput,TouchableOpacity, Alert } from 'react-native';

function Registermid() {
  const navigation = useNavigation();
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const [name,setName]=React.useState('');
  const [field,setfeild]=React.useState('');
  const [MWNUM,setMWnumber]=React.useState('');
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const createuserformidwife = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then ((userCredential) => {
      set(ref(db,MWNUM),{
          name:name,
          field:field,
          email:email,
          password:password,
        });
        setName('')
        setfeild('')
        setEmail('')
        setPassword('')
      
      Alert.alert('Account Created');
      navigation.navigate('Login');
    const user = userCredential.user;
    console. log (user)
    })
    .catch(error =>{
      Alert.alert(error.message);
    })
  }
    const handleSignIn = () => {
      signInWithEmailAndPassword(auth,email, password) 
      .then((userCredential)=>{
      console. log ('Signed in!')
      const user = userCredential. user;
      Alert.alert('Login Successfully');
    })
      .catch(error => {
        Alert.alert(error.message);

    })
    }
 
    const backtothelogin = () => {
        navigation.navigate('Login'); // Navigate to the 'Home' screen
      };
  return(
    <View
      style={{backgroundColor: 'rgb(238,174,202)',alignItems: 'center', justifyContent: 'center'}}><LinearGradient
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
        <View style={{borderColor:'#FFF',borderWidth:2,marginTop:170,marginBottom:170,padding:30,borderRadius:40,justifyContent:'center'}}>
        <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',marginTop:10,marginBottom:40,color:'#000000'}}>Signup</Text>
        <TextInput onChangeText={(text) => setName(text)} style={{borderWidth:2,borderColor:'#FFF',backgroundColor:'#FFF',padding:15,width:250,borderRadius:30,margin:10}}  placeholder= "Enter Name"/>
        <TextInput onChangeText={(text) => setEmail(text)} style={{borderWidth:2,borderColor:'#FFF',backgroundColor:'#FFF',padding:15,width:250,borderRadius:30,margin:10,marginBottom:20,}}  placeholder= "Enter Email"/>
        <TextInput onChangeText={(text) => setPassword(text)} style={{borderWidth:2,borderColor:'#FFF',backgroundColor:'#FFF',padding:15,width:250,borderRadius:30,margin:10,marginBottom:20,}}  placeholder= "Enter Password"/>
        <TextInput onChangeText={(text) => setfeild(text)} style={{borderWidth:2,borderColor:'#FFF',backgroundColor:'#FFF',padding:15,width:250,borderRadius:30,margin:10,marginBottom:20,}}  placeholder= "Enter field"/>
        <TextInput onChangeText={(text) => setMWnumber(text)} style={{borderWidth:2,borderColor:'#FFF',backgroundColor:'#FFF',padding:15,width:250,borderRadius:30,margin:10,marginBottom:20,}}  placeholder= "Enter MW No"/>
        <Text onPress={backtothelogin} style={{fontWeight:'bold',textAlign:'center'}}>Haven an acoount? Login</Text>
        <TouchableOpacity onPress={createuserformidwife}  style={{display:'flex',borderWidth:2,borderColor:'#FFF',padding:10,width:200,borderRadius:30,marginTop:10,marginRight:'auto',marginLeft:'auto',backgroundColor:'#000000'}}>
        <Text style={{fontSize: 17, fontWeight:'bold', color: '#FFF',textAlign:'center',color:'#FFF'}}>Register</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

export default Registermid;
