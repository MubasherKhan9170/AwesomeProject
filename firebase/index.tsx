// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrGj0n32ftCr-eG95HS6Y3k7s7PWAWRIE",
  authDomain: "awesomeproject-a3207.firebaseapp.com",
  projectId: "awesomeproject-a3207",
  storageBucket: "awesomeproject-a3207.appspot.com",
  messagingSenderId: "273149916831",
  appId: "1:273149916831:web:5f298d4deedd63c4c314aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db, getFirestore, collection, addDoc, getDocs  };