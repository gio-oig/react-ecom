import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAXnbhjQKoTxFOf9IfSxDGCEr56QvdJvh0',
  authDomain: 'ecom-app-de13a.firebaseapp.com',
  databaseURL: 'https://ecom-app-de13a.firebaseio.com',
  projectId: 'ecom-app-de13a',
  storageBucket: 'ecom-app-de13a.appspot.com',
  messagingSenderId: '406251712913',
  appId: '1:406251712913:web:1fc514e564a9c625492a30',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
