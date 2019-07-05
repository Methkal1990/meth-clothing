import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

///////////////////////////////// configurations to sign in with google//////////////////////////
const config = {
  apiKey: "AIzaSyBqcuDavtkkWI6zBM96KtAl2pkj2IlEW20",
  authDomain: "meth-clothing-db.firebaseapp.com",
  databaseURL: "https://meth-clothing-db.firebaseio.com",
  projectId: "meth-clothing-db",
  storageBucket: "",
  messagingSenderId: "143395620994",
  appId: "1:143395620994:web:3c08017938fd6e30",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

/////////////// end of configurations to sign in with google //////////////////////
export default firebase;

