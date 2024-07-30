// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyR71qmlqsll5YCgCTacJBIP5SCNL2coE",
  authDomain: "netflix-gpt-331a7.firebaseapp.com",
  projectId: "netflix-gpt-331a7",
  storageBucket: "netflix-gpt-331a7.appspot.com",
  messagingSenderId: "231744112479",
  appId: "1:231744112479:web:b4d444a7bd782ad8c698ea",
  measurementId: "G-V04RZBQS2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

