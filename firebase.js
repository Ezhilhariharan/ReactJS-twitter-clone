import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDP1enuxGiorbl-RN6baM_IJKIM9nXmyoU",
    authDomain: "twitter-clone-15011.firebaseapp.com",
    databaseURL: "https://twitter-clone-15011.firebaseio.com",
    projectId: "twitter-clone-15011",
    storageBucket: "twitter-clone-15011.appspot.com",
    messagingSenderId: "708107280689",
    appId: "1:708107280689:web:a6a2109b1ae90c01705010",
    measurementId: "G-2EQPFD03MS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
