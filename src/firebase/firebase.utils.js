import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAUD-V3AtnHoDjHqGGHneNtxKCRZgREHc8",
    authDomain: "jioclothing-db.firebaseapp.com",
    databaseURL: "https://jioclothing-db.firebaseio.com",
    projectId: "jioclothing-db",
    storageBucket: "jioclothing-db.appspot.com",
    messagingSenderId: "608116914232",
    appId: "1:608116914232:web:f8ec9b5e9ddb181b704ecd"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;

