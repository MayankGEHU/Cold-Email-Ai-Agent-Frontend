import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // Optional

const firebaseConfig = {
  apiKey: "AIzaSyDM3N4iTGn9sFH35SwnLwxLmPBzk1ZktVc",
  authDomain: "coldmail-genius.firebaseapp.com",
  projectId: "coldmail-genius",
  storageBucket: "coldmail-genius.appspot.com",
  messagingSenderId: "310927153099",
  appId: "1:310927153099:web:2c34989d666ef02ed4884e",
  measurementId: "G-4PT4VN7SJ3",
};

let app;
let auth;
let googleProvider;

if (typeof window !== "undefined") {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();
  // Optionally enable analytics:
  // if ('measurementId' in firebaseConfig) {
  //   const analytics = getAnalytics(app);
  // }
}

export { auth, googleProvider };
