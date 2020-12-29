import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvgB1u12lRzV8VcjjPWY0gBPvu66PzCtQ",
  authDomain: "clone-967d4.firebaseapp.com",
  projectId: "clone-967d4",
  storageBucket: "clone-967d4.appspot.com",
  messagingSenderId: "244443800025",
  appId: "1:244443800025:web:3a69b0da418499fe9239c8",
  measurementId: "G-C0Y2G8QELC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
