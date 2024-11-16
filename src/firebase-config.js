import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD71VXQ3osHkGCWXbIYOnTMuuuHugsBEZU",
  authDomain: "proyectofinal-3d293.firebaseapp.com",
  projectId: "proyectofinal-3d293",
  storageBucket: "proyectofinal-3d293.firebasestorage.app",
  messagingSenderId: "827789143122",
  appId: "1:827789143122:web:1f84db6df7c5789a5ec38b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
