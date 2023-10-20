import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh7UazAsaaZl0gi6QDwqc003_DvklxChY",
  authDomain: "netflix-clone-ea62d.firebaseapp.com",
  projectId: "netflix-clone-ea62d",
  storageBucket: "netflix-clone-ea62d.appspot.com",
  messagingSenderId: "290170477534",
  appId: "1:290170477534:web:905e346fda4e0a56d21b4f",
  measurementId: "G-X9EM5H6HV0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
