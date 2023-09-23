// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAg2Oap_eWE08l5WqOzEGlkQ8BQwiII7S8",
    authDomain: "react-app-firebase-intigration.firebaseapp.com",
    databaseURL: "https://react-app-firebase-intigration-default-rtdb.firebaseio.com",
    projectId: "react-app-firebase-intigration",
    storageBucket: "react-app-firebase-intigration.appspot.com",
    messagingSenderId: "1061884547220",
    appId: "1:1061884547220:web:54cc4d7cb9addd522c6481"
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);