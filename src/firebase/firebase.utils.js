import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDVYG03ozmRvTARVNALmWqpzG2O1gFzAGo",
  authDomain: "crwn-db-53e60.firebaseapp.com",
  projectId: "crwn-db-53e60",
  storageBucket: "crwn-db-53e60.appspot.com",
  messagingSenderId: "530346301501",
  appId: "1:530346301501:web:cf3bda8cc2ad4541e67254",
  measurementId: "G-CMRV6JLJBE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
