import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBd8MiwNrP2LZdO6CPEf5TY8K-C6h0pMHI",
  authDomain: "eride8ooh.firebaseapp.com",
  projectId: "eride8ooh",
  storageBucket: "eride8ooh.appspot.com",
  messagingSenderId: "379398180076",
  appId: "1:379398180076:web:c87bc2ee9d83b9b7c2e9c9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
