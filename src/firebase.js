import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const app = firebase.initializeApp({
  apiKey: "AIzaSyCTtFcfmjruk2lKsvSjg7lBLrs4eabBzu4",
  authDomain: "telegram-ee34a.firebaseapp.com",
  projectId: "telegram-ee34a",
  storageBucket: "telegram-ee34a.appspot.com",
  messagingSenderId: "358424046591",
  appId: "1:358424046591:web:ad49b0d3d018b41da795ca",
  measurementId: "G-P25LVBT6HS"
});

const auth = app.auth();
const db = app.firestore();
export {auth, db};
export default app;