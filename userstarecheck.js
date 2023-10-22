import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    // apiKey: "AIzaSyC1PSL22R48xuHj_V7BwTCgGOUz-rCa2ZY",
    // authDomain: "littlelove-e5353.firebaseapp.com",
    // databaseURL: "https://littlelove-e5353-default-rtdb.firebaseio.com",
    // projectId: "littlelove-e5353",
    // storageBucket: "littlelove-e5353.appspot.com",
    // messagingSenderId: "783307813886",
    // appId: "1:783307813886:web:2f5d858c6c0624940106af"

    apiKey: "AIzaSyD8KgliMnL-YMr3FPskzbkxKGXUaT4ZYxc",
    authDomain: "little-love-aef05.firebaseapp.com",
    databaseURL: "https://little-love-aef05-default-rtdb.firebaseio.com",
    projectId: "little-love-aef05",
    storageBucket: "little-love-aef05.appspot.com",
    messagingSenderId: "749665791874",
    appId: "1:749665791874:web:1c94ab92c31c72620e299b",
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};