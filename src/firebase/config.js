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

export { projectFirestore, timestamp, projectAuth, googleSignInAuth }
