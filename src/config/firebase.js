import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyADhYAWyEiTQllj4upQN090JK3SfIn8vak",
  authDomain: "tiktok---jornada-ba33b.firebaseapp.com",
  projectId: "tiktok---jornada-ba33b",
  storageBucket: "tiktok---jornada-ba33b.appspot.com",
  messagingSenderId: "1003593608180",
  appId: "1:1003593608180:web:4e45e911bdaf02553127a1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;