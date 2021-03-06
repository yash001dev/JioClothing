import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAUD-V3AtnHoDjHqGGHneNtxKCRZgREHc8",
  authDomain: "jioclothing-db.firebaseapp.com",
  databaseURL: "https://jioclothing-db.firebaseio.com",
  projectId: "jioclothing-db",
  storageBucket: "jioclothing-db.appspot.com",
  messagingSenderId: "608116914232",
  appId: "1:608116914232:web:f8ec9b5e9ddb181b704ecd",
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    console.log("Cureently Not Any User...");
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();  
  if (!snapshot.exists) {
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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};


export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch=firestore.batch();
  objectsToAdd.forEach(obj=>{
      const newDocRef=collectionRef.doc();
      batch.set(newDocRef,obj);
  });
  return await batch.commit(); 
};


export const convertCollectionsSnapshotToMap=(collections)=>{
  const transformedCollection=collections.docs.map(
    doc=>{
      const{title,items}=doc.data();
      return{
        routeName:encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    }
  );
   return transformedCollection.reduce((accumlator,collection)=>{
    accumlator[collection.title.toLowerCase()]=collection;
    return accumlator;
  },{});
};

export const getCurrentUser=()=>{
  return new Promise((resolve,reject)=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      unsubscribe();
      resolve(userAuth);
    },reject)
  });
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
