// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD5EVZyjH5yc8imG5AFFQgj9sKc-J9nqS0",
  authDomain: "warehouse-project-f3584.firebaseapp.com",
  projectId: "warehouse-project-f3584",
  storageBucket: "warehouse-project-f3584.appspot.com",
  messagingSenderId: "216686825420",
  appId: "1:216686825420:web:8e2e6c1e658f9d79de9769",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
