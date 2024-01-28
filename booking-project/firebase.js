// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAWjQAW9fRklmDBSOMoOdpka7Rj12KMVaE",
  authDomain: "booking-clone-react-native.firebaseapp.com",
  projectId: "booking-clone-react-native",
  storageBucket: "booking-clone-react-native.appspot.com",
  messagingSenderId: "679389956405",
  appId: "1:679389956405:web:a29d821cabb8e96cb5e47c",
  measurementId: "G-MHGQG3FSTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore();

export {auth, db};