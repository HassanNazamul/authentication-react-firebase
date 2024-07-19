// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXUWbY9ThyNxed1mVfBimJzfrctpHjXCM",
    authDomain: "fir-login-6d88d.firebaseapp.com",
    databaseURL: "https://fir-login-6d88d-default-rtdb.firebaseio.com/",
    projectId: "fir-login-6d88d",
    storageBucket: "fir-login-6d88d.appspot.com",
    messagingSenderId: "373106571658",
    appId: "1:373106571658:web:71cfd3d1ce7833e1e73073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);  

export const auth = getAuth(app);
export const db = getDatabase(app);