// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTFrZ08k6yoK51uO2OuTO_V1i3QcanJas",
  authDomain: "house-market-project-dc9b9.firebaseapp.com",
  projectId: "house-market-project-dc9b9",
  storageBucket: "house-market-project-dc9b9.appspot.com",
  messagingSenderId: "404232720297",
  appId: "1:404232720297:web:096707c9ab3ef594d37eb8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
