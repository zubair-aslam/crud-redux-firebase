import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfkvFxStx6hb6YprMpsVdRK81z9pdjJiQ",
  authDomain: "crud-firebase-redux-1e6a5.firebaseapp.com",
  projectId: "crud-firebase-redux-1e6a5",
  storageBucket: "crud-firebase-redux-1e6a5.appspot.com",
  messagingSenderId: "207673418955",
  appId: "1:207673418955:web:b2d487912b3ad6daf3e74e"
};

firebase.initializeApp(firebaseConfig);

export default firebase;