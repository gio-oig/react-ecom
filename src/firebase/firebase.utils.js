import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyApwU-Mv2Ahr7BA9AWhF12SFY8SBKcdn5s',
  authDomain: 'ecom-app-55b84.firebaseapp.com',
  databaseURL: 'https://ecom-app-55b84.firebaseio.com',
  projectId: 'ecom-app-55b84',
  storageBucket: 'ecom-app-55b84.appspot.com',
  messagingSenderId: '181733269201',
  appId: '1:181733269201:web:db505db8e860a15d516ff0',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
