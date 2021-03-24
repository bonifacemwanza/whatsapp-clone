import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0yD168_8U4tDJlTIFsdumJlGMjAlRNiY",
    authDomain: "whatsapp-clone-cbmk.firebaseapp.com",
    projectId: "whatsapp-clone-cbmk",
    storageBucket: "whatsapp-clone-cbmk.appspot.com",
    messagingSenderId: "1083900941307",
    appId: "1:1083900941307:web:05032b9330464efbf3715e",
    measurementId: "G-YVNCC3DJB7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider};
export default db;