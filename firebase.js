// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAXbc--d4T0Qk3zj5eewDRQbN3pn9_KQ-Q",
  authDomain: "parent-communication-system.firebaseapp.com",
  projectId: "parent-communication-system",
  storageBucket: "parent-communication-system.appspot.com",
  messagingSenderId: "277714611613",
  appId: "1:277714611613:web:a9ff3b59ce5899c27f1374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const db = getFirestore(app);
export const auth = getAuth(app);
