import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpYKqYSEQIG2ThReaSN5fIIT00obAyQtI",
  authDomain: "youvsvae.firebaseapp.com",
  projectId: "youvsvae",
  storageBucket: "youvsvae.appspot.com",
  messagingSenderId: "810857968123",
  appId: "1:810857968123:web:0f9aef531ae308bdc6db5e",
  measurementId: "G-14FZ38G3HT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
