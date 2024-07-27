
import firebase from "firebase/compat/app"

import "firebase/compat/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAc7fY6FVSZwxa3CFN6fAdFzzwMPeAKXh8",
  authDomain: "shopper-app-5cd52.firebaseapp.com",
  projectId: "shopper-app-5cd52",
  storageBucket: "shopper-app-5cd52.appspot.com",
  messagingSenderId: "1031941386987",
  appId: "1:1031941386987:web:1eda77e4e64e26f40d44ae"
};
//To connect to Firebase Application

const app=firebase.initializeApp(firebaseConfig)

// To connect to Firestore database

export const  myDatabase=firebase.firestore()

//To connect to Authentication(Google Authentication)
//GoogleAuthProvider --> This is a class that will help our react application to connect with Google Authentication
export const auth=getAuth(app) //auth -->Authentication system

export const provider=new GoogleAuthProvider() //provider --> Google Authentication



