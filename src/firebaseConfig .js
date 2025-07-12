import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Only import getAnalytics if you actually use Analytics in the browser.
import { getAnalytics } from "firebase/analytics";

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

// Only initialize analytics in the browser environment
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// Export analytics if needed, otherwise remove this line
export { app, analytics };