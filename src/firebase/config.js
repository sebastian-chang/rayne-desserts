import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/functions'

const firebaseConfig = {
  apiKey: "AIzaSyACNzoWUMQ4jkNG9XV-Ug_1Or9qmm-QgK4",
  authDomain: "rayne-desserts.firebaseapp.com",
  projectId: "rayne-desserts",
  storageBucket: "rayne-desserts.appspot.com",
  messagingSenderId: "195718620630",
  appId: "1:195718620630:web:5bfc86b2dfd5bbd3acf077",
  VUE_APP_GOOGLE_LOCATION: process.env.VUE_APP_GOOGLE_LOCATION,
  VUE_APP_EMAIL: process.env.VUE_APP_EMAIL,
  VUE_APP_PHONE: process.env.VUE_APP_PHONE,
  VUE_APP_EMAILJS_SERVICE_ID: process.env.VUE_APP_EMAILJS_SERVICE_ID,
  VUE_APP_EMAILJS_CONTACT_TEMPLATE_ID: process.env.VUE_APP_EMAILJS_CONTACT_TEMPLATE_ID,
  VUE_APP_EMAILJS_TASTING_TEMPLATE_ID: process.env.VUE_APP_EMAILJS_TASTING_TEMPLATE_ID,
  VUE_APP_EMAILJS_USER_ID: process.env.VUE_APP_EMAILJS_USER_ID,
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

const envConfig = firebase.functions().app.options

export {
  projectFirestore,
  timestamp,
  projectAuth,
  googleSignInAuth,
  addCollectionAndDocuments,
  envConfig
}
