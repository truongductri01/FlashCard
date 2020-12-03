import * as firebase from "firebase/app";
import "firebase/firestore";

// This is served as the path to the correct Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBBTv0PXpEm--Qmr6bd7Mxz5XEwKxbDhlY",
  authDomain: "flashcard-59325.firebaseapp.com",
  databaseURL: "https://flashcard-59325.firebaseio.com",
  projectId: "flashcard-59325",
  storageBucket: "flashcard-59325.appspot.com",
  messagingSenderId: "506914610053",
  appId: "1:506914610053:web:abbb6e5d4ebb5d88f302ec",
};

// Initialize the App
firebase.initializeApp(firebaseConfig);

// We only FireStore
const db = firebase.firestore();

// Create timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
