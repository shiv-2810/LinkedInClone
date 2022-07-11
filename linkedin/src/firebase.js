import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCiprG41Sz6Jcl5ivR9rmxZOZJesYbddzo",
    authDomain: "linkedin-a7cdc.firebaseapp.com",
    projectId: "linkedin-a7cdc",
    storageBucket: "linkedin-a7cdc.appspot.com",
    messagingSenderId: "836830473072",
    appId: "1:836830473072:web:98ae8dfcc34a44e5c47db5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };