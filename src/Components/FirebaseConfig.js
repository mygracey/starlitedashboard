// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuevwvUTa6Dym9FOrGDT4kxNHgoiYBRd8",
  authDomain: "starliteproject-574b4.firebaseapp.com",
  databaseURL: "https://starliteproject-574b4-default-rtdb.firebaseio.com",
  projectId: "starliteproject-574b4",
  storageBucket: "starliteproject-574b4.firebasestorage.app",
  messagingSenderId: "312606695997",
  appId: "1:312606695997:web:26dcd83a9a6b5fe9cb4054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app)
export const auth=getAuth(app)