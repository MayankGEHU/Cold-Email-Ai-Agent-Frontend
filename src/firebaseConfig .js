import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDM3N4iTGn9sFH35SwnLwxLmPBzk1ZktVc",
  authDomain: "coldmail-genius.firebaseapp.com",
  projectId: "coldmail-genius",
  storageBucket: "coldmail-genius.appspot.com",
  messagingSenderId: "310927153099",
  appId: "1:310927153099:web:2c34989d666ef02ed4884e",
  measurementId: "G-4PT4VN7SJ3"
};

let app;
let analytics;
let auth;
let googleProvider;

if (typeof window !== "undefined") {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  // Optional: safely check if analytics is supported
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });

  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();
}

export { auth, googleProvider };
