import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBiPYhqUN9HW1rkOQQzegld8TSQp5fld3I",
  authDomain: "stage-three-project.firebaseapp.com",
  projectId: "stage-three-project",
  storageBucket: "stage-three-project.appspot.com",
  messagingSenderId: "35068999579",
  appId: "1:35068999579:web:e8b62c6046cc8a14cc133e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);