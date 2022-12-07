import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAMG-D0nfyLA2BgPLRQRoI0FszxYzWfG0",
  authDomain: "house-marketplace-app-77536.firebaseapp.com",
  projectId: "house-marketplace-app-77536",
  storageBucket: "house-marketplace-app-77536.appspot.com",
  messagingSenderId: "549412764595",
  appId: "1:549412764595:web:daa10dc357453d3c1529c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();