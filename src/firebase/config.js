import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyACNzoWUMQ4jkNG9XV-Ug_1Or9qmm-QgK4",
  authDomain: "rayne-desserts.firebaseapp.com",
  projectId: "rayne-desserts",
  storageBucket: "rayne-desserts.appspot.com",
  messagingSenderId: "195718620630",
  appId: "1:195718620630:web:5bfc86b2dfd5bbd3acf077"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Intialize Firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const projectAuth = firebase.auth()
const googleSignInAuth = firebase.auth.GoogleAuthProvider.PROVIDER_ID

// Firestore functions
const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = projectFirestore.collection(collectionKey)
  const batch = projectFirestore.batch()
  objectsToAdd.items.forEach(obj => {
    collectionRef.add(obj)
    // const docRef = projectFirestore.collection(collectionRef).add(obj)
    // console.log('>>>DOC REF', docRef)
    // batch.set(docRef, obj)
    // Make me a new document object
    // const newDocRef = collectionRef.doc()
    // batch.set(newDocRef, obj)
  })

  await batch.commit()
}

export {
  projectFirestore,
  timestamp,
  projectAuth,
  googleSignInAuth,
  addCollectionAndDocuments
}
