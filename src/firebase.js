// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC-uy2ZOUTGNdzdlB4iNkq8VNUvih4WDBs",
    authDomain: "myntra-clone-2d5af.firebaseapp.com",
    projectId: "myntra-clone-2d5af",
    storageBucket: "myntra-clone-2d5af.appspot.com",
    messagingSenderId: "980156414758",
    appId: "1:980156414758:web:1b7e17409ef0c416409fe7",
    measurementId: "G-RFJZ9L8QVC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const auth=firebase.auth();

export default firebaseApp
export {db,auth}