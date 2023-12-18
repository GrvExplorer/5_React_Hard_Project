// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCUgrTZESuxrEb0c14Cld1vBXLY-lb-ZPM",
  authDomain: "fir-fd12b.firebaseapp.com",
  projectId: "fir-fd12b",
  storageBucket: "fir-fd12b.appspot.com",
  messagingSenderId: "454545957515",
  appId: "1:454545957515:web:6b5883265355e94fbbea8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth , provider }