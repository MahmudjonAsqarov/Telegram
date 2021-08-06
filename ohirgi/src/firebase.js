import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyD1Qu_nYUY8jqtgRFuuTGqcE0dTPbFq2p0",
  authDomain: "telegram-d338c.firebaseapp.com",
  projectId: "telegram-d338c",
  storageBucket: "telegram-d338c.appspot.com",
  messagingSenderId: "21485356826",
  appId: "1:21485356826:web:2e13e75cdf89bed58b8ea3",
  measurementId: "G-J4PCGPE6E4"
}) ;

const auth = app.auth();
const db = app.firestore()
export {auth, db}
export default app;