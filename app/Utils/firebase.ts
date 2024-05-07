import {FirebaseApp, initializeApp } from "firebase/app"
import "firebase/auth"
import * as dotenv from 'dotenv';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
dotenv.config();




const firebaseConfig = {
  apiKey: "AIzaSyBQmcIntaEYx3acC23FDsF86fxyUlUc1z4",
  authDomain: "orange-3ba1a.firebaseapp.com",
  projectId: "orange-3ba1a",
  storageBucket: "orange-3ba1a.appspot.com",
  messagingSenderId: "57781250361",
  appId: "1:57781250361:web:ce6a7d7212d810df1920e8"
};

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEYS,
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
// }

export const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);

export const database = getFirestore()

