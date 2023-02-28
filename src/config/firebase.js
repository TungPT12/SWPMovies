// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj_kq4cvOMnYFbtSsQ51fNbAHWYEiRwh4",
  authDomain: "movie-35e57.firebaseapp.com",
  projectId: "movie-35e57",
  storageBucket: "movie-35e57.appspot.com",
  messagingSenderId: "781837153736",
  appId: "1:781837153736:web:5eef4079a1b567e1fe7cfd",
  measurementId: "G-2PFQSRJB79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
export { database , analytics, provider, auth} ;