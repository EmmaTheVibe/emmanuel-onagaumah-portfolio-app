import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase using environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_APP_MEASUREMENT_ID,

  //   apiKey: "AIzaSyDTPyyPSaOttfatg0Td_84jqC925yyOIS4",
  //   authDomain: "portfolio-site-e35b6.firebaseapp.com",
  //   projectId: "portfolio-site-e35b6",
  //   storageBucket: "portfolio-site-e35b6.appspot.com",
  //   messagingSenderId: "880184975408",
  //   appId: "1:880184975408:web:8356f43adde9f3e22e4df5",
  //   measurementId: "G-ZHYXZL3MSK",
};

// Initialize Firebase app and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
