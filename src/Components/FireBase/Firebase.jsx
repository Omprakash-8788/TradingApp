// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA62KhdU2xVsDGo1OnxX4IjK9ECgJJisfo",
  authDomain: "newon-35d97.firebaseapp.com",
  databaseURL: "https://newon-35d97-default-rtdb.firebaseio.com",
  projectId: "newon-35d97",
  storageBucket: "newon-35d97.appspot.com",
  messagingSenderId: "860893571955",
  appId: "1:860893571955:web:f3f0fc0045ee68a2f5b306"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export default Firebase