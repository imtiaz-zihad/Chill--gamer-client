// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfmwiATDVj3083uO6f-m06-1ZPONWLERs",
  authDomain: "chill-gamer-38a71.firebaseapp.com",
  projectId: "chill-gamer-38a71",
  storageBucket: "chill-gamer-38a71.firebasestorage.app",
  messagingSenderId: "414126407366",
  appId: "1:414126407366:web:838d91fdfae4de1224e1c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);