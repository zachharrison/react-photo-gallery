import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA3E-cZ7zobd54V3KsWbyO5-e-Puifx-24',
  authDomain: 'firegram-e1119.firebaseapp.com',
  projectId: 'firegram-e1119',
  storageBucket: 'firegram-e1119.appspot.com',
  messagingSenderId: '954141924685',
  appId: '1:954141924685:web:dd0b0d9120939948046b04',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timestamp };
