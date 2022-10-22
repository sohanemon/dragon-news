// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYAFKR0n-Iq8MYMHzxJOxfonHrQhZE3H8",
  authDomain: "drgn-nws-prtl.firebaseapp.com",
  projectId: "drgn-nws-prtl",
  storageBucket: "drgn-nws-prtl.appspot.com",
  messagingSenderId: "937534023146",
  appId: "1:937534023146:web:fa003b3b3229625e0a3e93",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
