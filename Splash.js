import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  const navigation = useNavigation();
  const Registermid = () => {
      navigation.navigate('Registermid'); // Navigate to the 'Home' screen
    };
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
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
      <TouchableOpacity  onPress={Registermid} style={{borderRadius:30,borderWidth:2,borderColor:'#00000',padding:10,margin:20,}}>
        <Text  style={{fontWeight:'bold',fontSize:20,}}>MidWife</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:30,borderWidth:2,borderColor:'#00000',padding:10,margin:20,}}>
        <Text style={{fontWeight:'bold',fontSize:20,}}> Mother </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:30,borderWidth:2,borderColor:'#00000',padding:10,margin:20,}}>
        <Text style={{fontWeight:'bold',fontSize:20,}}>  Seller  </Text>
      </TouchableOpacity>
    </View>
  );
}
export default App;