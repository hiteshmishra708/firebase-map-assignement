import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDU1v7QxgZgWj15tfDgQqXyr1qq0HlIwc",
  authDomain: "testprj-1d99e.firebaseapp.com",
  databaseURL: "https://testprj-1d99e.firebaseio.com",
  projectId: "testprj-1d99e",
  storageBucket: "testprj-1d99e.appspot.com",
  messagingSenderId: "904216341432",
  appId: "1:904216341432:web:f40b53a8e82ffaec5dbd4d",
  measurementId: "G-JZB7ZEH09X"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
