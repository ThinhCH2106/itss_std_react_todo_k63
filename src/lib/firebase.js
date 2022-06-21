import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHvY6d1MEdVqP7YlEO_RXU4zK3NvjOVNA",
  authDomain: "fir-sample-aae5f.firebaseapp.com",
  projectId: "fir-sample-aae5f",
  storageBucket: "fir-sample-aae5f.appspot.com",
  messagingSenderId: "1005442944200",
  appId: "1:1005442944200:web:72a8f2231c71ae4dfa69fd",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
