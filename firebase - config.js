// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFTEbkABYToyElY_HIy06tV_swaWAoXxM",
  authDomain: "catholic-church-data.firebaseapp.com",
  projectId: "catholic-church-data",
  storageBucket: "catholic-church-data.firebasestorage.app",
  messagingSenderId: "1087535131918",
  appId: "1:1087535131918:web:c6c1e184bc853f7afb3b5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
