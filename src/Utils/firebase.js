// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfhkrTQT15nU_Io3GOc0GGcRB8TltAWr0",
  authDomain: "movietime-5b367.firebaseapp.com",
  projectId: "movietime-5b367",
  storageBucket: "movietime-5b367.appspot.com",
  messagingSenderId: "313536885560",
  appId: "1:313536885560:web:dfa4d8e3cd3ea4970d47cd",
  measurementId: "G-25P9NVHF96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();