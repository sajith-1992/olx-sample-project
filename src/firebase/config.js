import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
    apiKey: "AIzaSyBelVwfbVIyIWdV5APPxeJ5xkPTdifUNB8",
    authDomain: "fir-6f05b.firebaseapp.com",
    projectId: "fir-6f05b",
    storageBucket: "fir-6f05b.firebasestorage.app",
    messagingSenderId: "254370711574",
    appId: "1:254370711574:web:0199f93ef58e4390918d37",
    measurementId: "G-LDVW5HY6SC"
  };
  
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 const  db = getFirestore(app);
 export const auth = getAuth(app);
 export default db;
 