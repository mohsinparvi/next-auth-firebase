// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwBKr3M3W9OyHAtIu3wQGKMHzUoBpGDqE",
  authDomain: "user-auth-project-d643b.firebaseapp.com",
  projectId: "user-auth-project-d643b",
  storageBucket: "user-auth-project-d643b.appspot.com",
  messagingSenderId: "767062777735",
  appId: "1:767062777735:web:1ec3a4f8b733fcb8d6bd22",
  measurementId: "G-8QQP2JD2WF",
};

// Initialize Firebase
const app = getApps().length ? getApps() : initializeApp(firebaseConfig);
const auth = getAuth();
// const analytics = getAnalytics(app);
export { auth, app };
