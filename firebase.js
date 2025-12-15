// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Your Firebase config
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
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
