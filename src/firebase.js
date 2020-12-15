import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDFQLLImJRAIqFL4h95JGiClSuCZMDOKhQ",
    authDomain: "tinder-clone-5b2b6.firebaseapp.com",
    projectId: "tinder-clone-5b2b6",
    storageBucket: "tinder-clone-5b2b6.appspot.com",
    messagingSenderId: "532868778247",
    appId: "1:532868778247:web:ee07e08dfb97fce70e9da2",
    measurementId: "G-J5EHNCYNFP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;