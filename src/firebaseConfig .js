import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDM3N4iTGn9sFH35SwnLwxLmPBzk1ZktVc",
  authDomain: "coldmail-genius.firebaseapp.com",
  projectId: "coldmail-genius",
  storageBucket: "coldmail-genius.appspot.com",
  messagingSenderId: "310927153099",
  appId: "1:310927153099:web:2c34989d666ef02ed4884e",
  measurementId: "G-4PT4VN7SJ3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
