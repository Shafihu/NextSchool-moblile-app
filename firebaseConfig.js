import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const key = process.env.EXPO_PUBLIC_GOOGLE_FIREBASE_KEY;

const firebaseConfig = {
  apiKey: key,
  authDomain: "sma-v2-e1faf.firebaseapp.com",
  projectId: "sma-v2-e1faf",
  storageBucket: "sma-v2-e1faf.appspot.com",
  messagingSenderId: "370176630406",
  appId: "1:370176630406:web:ee2ca36b77849cf35cfb07",
  measurementId: "G-7G5Z9BJHH4",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
