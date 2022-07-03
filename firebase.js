// import { firestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYLAgB4Ox51aRMGxnbG-fljUBhFxDEpE0",
  authDomain: "shadesofruthbackend.firebaseapp.com",
  projectId: "shadesofruthbackend",
  storageBucket: "shadesofruthbackend.appspot.com",
  messagingSenderId: "784575971376",
  appId: "1:784575971376:web:17668f9d556f0b64ce6df5",
  measurementId: "G-EC7RTHHF46"
};

export const app = initializeApp(firebaseConfig);

// const db = firebase.firestore();
const db = getFirestore();

export const dbStorage = getStorage();
export const auth = getAuth(app);

export default db;
// export { auth, db, dbStorage};
