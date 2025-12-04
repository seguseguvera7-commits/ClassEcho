// ===============================
// Firebase Initialization File
// firebase.js
// ===============================

// 🔥 Your Firebase Config — replace this with your own values!
const firebaseConfig = {
  apiKey: "AIzaSyBjaRB7dt7EVdd3rBNOgCwt3jwSR2QXZ3g",
  authDomain: "classecho-c4e3c.firebaseapp.com",
  projectId: "classecho-c4e3c",
  storageBucket: "classecho-c4e3c.firebasestorage.app",
  messagingSenderId: "342489428634",
  appId: "1:342489428634:web:6f0ec87d8005f1e9ae6523",
  measurementId: "G-3YV9W4RR43"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Expose Firebase services globally
const auth = firebase.auth();
const db = firebase.firestore();
