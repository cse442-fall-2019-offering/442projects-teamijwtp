import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCUv3-1uS1UdC-L6kDXquaYsRqqsL7Mxk0",
  authDomain: "igappchat.firebaseapp.com",
  databaseURL: "https://igappchat.firebaseio.com",
  projectId: "igappchat",
  storageBucket: "igappchat.appspot.com",
  messagingSenderId: "81381755754",
  appId: "1:81381755754:web:934ffbb5fe9499ab67b313",
  measurementId: "G-GDY9EPNT5T"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase;
