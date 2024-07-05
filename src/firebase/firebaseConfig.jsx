// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATtIUcqtSkqNkTUmjT0i0SBM1Hc5f9E-c",
    authDomain: "login01-1d0e7.firebaseapp.com",
    databaseURL: "https://login01-1d0e7-default-rtdb.firebaseio.com/",
    projectId: "login01-1d0e7",
    storageBucket: "login01-1d0e7.appspot.com",
    messagingSenderId: "647931940394",
    appId: "1:647931940394:web:3c764852768fd6b00e7d53",
    measurementId: "G-4GK19838YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);  

export const auth = getAuth(app);
export const db = getDatabase(app);