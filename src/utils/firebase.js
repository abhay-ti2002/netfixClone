// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaOPDLavL13P_NczCXCSPfe_zHGrnp2mI",
  authDomain: "moviewebsite-c192c.firebaseapp.com",
  projectId: "moviewebsite-c192c",
  storageBucket: "moviewebsite-c192c.firebasestorage.app",
  messagingSenderId: "33007541953",
  appId: "1:33007541953:web:2883f6463982f14fef7e40",
  measurementId: "G-F8895T2TG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // eslint-disable-line

export const auth = getAuth();
