// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA8etDcz0c-QeYYw-6Z2h1ElPTThnQ9uWw',
  authDomain: 'house-marketplace-app-26b63.firebaseapp.com',
  projectId: 'house-marketplace-app-26b63',
  storageBucket: 'house-marketplace-app-26b63.appspot.com',
  messagingSenderId: '391242157524',
  appId: '1:391242157524:web:3bca38f182f3d393ca9a41'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
