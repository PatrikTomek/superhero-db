import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcf85_EHxki0Yl8-2ZSEMX_xc8xxGlyrw",
  authDomain: "superhero-database-68d3f.firebaseapp.com",
  projectId: "superhero-database-68d3f",
  storageBucket: "superhero-database-68d3f.appspot.com",
  messagingSenderId: "3477979952",
  appId: "1:3477979952:web:a1ccb35512982dc96b3ef5",
};

firebase.initializeApp(firebaseConfig);

const firestoreData = firebase.firestore();

export { firestoreData };
