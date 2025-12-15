// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTAbsRYKgzmwB3Z90fY_vnph-5I8p4c_c",
  authDomain: "g-a-limited.firebaseapp.com",
  projectId: "g-a-limited",
  storageBucket: "g-a-limited.appspot.com",
  messagingSenderId: "214114713672",
  appId: "1:214114713672:web:054c2520de37fa80b2187d",
  measurementId: "G-RQP52WK4H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exports for use in other scripts
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
