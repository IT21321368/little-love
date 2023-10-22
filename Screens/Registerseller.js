import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useNavigation } from '@react-navigation/native';
import { firebaseConfig } from '../FirebaseConfig';
import { ref, set } from 'firebase/database';
import { db } from '../FirebaseConfig';
import { View, Text,TextInput,TouchableOpacity, Alert } from 'react-native';
function Registerseller() {
    const navigation = useNavigation();
    const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const [name,setName]=React.useState('');
  const [sellerid,setidnumber]=React.useState('');
  const [phone,setphone]=React.useState('');
    const app = initializeApp(firebaseConfig);
    const auth=getAuth(app);
    const createuserforseller = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then ((userCredential) => {
        set(ref(db,sellerid ),{
            name:name,
            sellerid:sellerid,
            email:email,
            phone:phone,
            password:password,
          });
          setName('')
          setidnumber('')
          setEmail('')
          setphone('')
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
          navigation.navigate('Loginseller');
        };
    return(
        <View
          style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={{borderColor:'#000000',borderWidth:2,backgroundColor:'#F1DEDE',padding:30,borderRadius:40,justifyContent:'center'}}>
            <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',marginTop:10,marginBottom:40,color:'#000000'}}>LittleLove</Text>
            <TextInput onChangeText={(text) => setName(text)} style={{borderWidth:2,borderColor:'#000000',backgroundColor:'#FFF',padding:15,width:250,borderRadius:30,margin:10}}  placeholder= "Enter Name"/>
            <TextInput onChangeText={(text) => setEmail(text)} style={{borderWidth:2,borderColor:'#000000',backgroundColor:'#FFF',padding:15,width:250,borderRadius:30,margin:10,marginBottom:20,}}  placeholder= "Enter Email"/>
            <TextInput onChangeText={(text) => setPassword(text)} style={{borderWidth:2,borderColor:'#000000',backgroundColor:'#FFF',padding:15,width:250,borderRadius:30,margin:10,marginBottom:20,}}  placeholder= "Enter Password"/>
            <TextInput onChangeText={(text) => setidnumber(text)} style={{borderWidth:2,borderColor:'#000000',backgroundColor:'#FFF',padding:15,width:250,borderRadius:30,margin:10,marginBottom:20,}}  placeholder= "Enter ID No"/>
            <TextInput onChangeText={(text) => setphone(text)} style={{borderWidth:2,borderColor:'#000000',backgroundColor:'#FFF',padding:15,width:250,borderRadius:30,margin:10,marginBottom:20,}}  placeholder= "Enter phone"/>
            <Text onPress={backtothelogin} style={{fontWeight:'bold',textAlign:'center'}}>Haven an acoount? Login</Text>
            <TouchableOpacity onPress={createuserforseller} style={{display:'flex',borderWidth:2,borderColor:'#000000',padding:10,width:200,borderRadius:30,marginTop:10,marginRight:'auto',marginLeft:'auto'}}>
            <Text style={{fontSize: 17, fontWeight:'bold', color: '#000000',textAlign:'center',color:'#000000'}}>Register</Text>
            </TouchableOpacity>
            </View>
        </View>
      );
}

export default Registerseller;
