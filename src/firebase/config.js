import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBJ9sc2M7GODKqs1EFxaDHcizGOTfh1VN8",
    authDomain: "olxx-f0c10.firebaseapp.com",
    projectId: "olxx-f0c10",
    storageBucket: "olxx-f0c10.appspot.com",
    messagingSenderId: "265149064327",
    appId: "1:265149064327:web:3caab1f1c91e3d3d9bc422",
    measurementId: "G-02W8NNTV7T"
  };

 export default firebase.initializeApp(firebaseConfig)