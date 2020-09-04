import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-JW1pmYMKNuTWp4cPoBQuu79jQHTALzQ",
  authDomain: "tinder-c6796.firebaseapp.com",
  databaseURL: "https://tinder-c6796.firebaseio.com",
  projectId: "tinder-c6796",
  storageBucket: "tinder-c6796.appspot.com",
  messagingSenderId: "934907110220",
  appId: "1:934907110220:web:e996b5e84e6599b6fe65e9",
  measurementId: "G-FDCYQJ7XHC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
