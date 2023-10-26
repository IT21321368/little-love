import firebase from 'firebase/compat/app';
import  {getDatabase} from 'firebase/database';

const firebaseConfig = {
  
  apiKey: "AIzaSyD8KgliMnL-YMr3FPskzbkxKGXUaT4ZYxc",
  authDomain: "little-love-aef05.firebaseapp.com",
  databaseURL: "https://little-love-aef05-default-rtdb.firebaseio.com",
  projectId: "little-love-aef05",
  storageBucket: "little-love-aef05.appspot.com",
  messagingSenderId: "749665791874",
  appId: "1:749665791874:web:1c94ab92c31c72620e299b",
  };

  const app = initializeApp(firebaseConfig);
  if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
    }
    const db = getDatabase() ;
    export {db};