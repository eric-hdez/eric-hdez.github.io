// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDFxnwcjAOe6U2U54xojSizbXCKPWHsSOo',
  authDomain: 'personal-website-dcbf8.firebaseapp.com',
  projectId: 'personal-website-dcbf8',
  storageBucket: 'personal-website-dcbf8.appspot.com',
  messagingSenderId: '157568230486',
  appId: '1:157568230486:web:6ef9e6215ceba1c70e07f7',
  measurementId: 'G-G8S59XE0X1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
