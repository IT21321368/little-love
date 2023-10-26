// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
 export const firebaseConfig = {

  apiKey: "AIzaSyD8KgliMnL-YMr3FPskzbkxKGXUaT4ZYxc",
  authDomain: "little-love-aef05.firebaseapp.com",
  projectId: "little-love-aef05",
  storageBucket: "little-love-aef05.appspot.com",
  messagingSenderId: "749665791874",
  appId: "1:749665791874:web:1c94ab92c31c72620e299b",
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase (app);