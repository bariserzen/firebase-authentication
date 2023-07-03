// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEVhDQfh4aXYGtDIWNYTBng3avoj3e7EM",
  authDomain: "fir-authentication-939b6.firebaseapp.com",
  projectId: "fir-authentication-939b6",
  storageBucket: "fir-authentication-939b6.appspot.com",
  messagingSenderId: "769154071311",
  appId: "1:769154071311:web:382aa6e6b332c08e3edc7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;