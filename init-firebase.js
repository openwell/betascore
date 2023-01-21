// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.15.0//firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDYpp-j-Bk8u3c1h_1FVjSATu_MG9EDQRk",
  authDomain: "betascore-waitlist.firebaseapp.com",
  projectId: "betascore-waitlist",
  storageBucket: "betascore-waitlist.appspot.com",
  messagingSenderId: "1067736312999",
  appId: "1:1067736312999:web:ef248c94e7565609f5ff82",
  measurementId: "G-FH9V8F7K4F"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const dbFirebase = getFirestore(app);

export const saveData = async (data) => {
  const waitListRef = collection(dbFirebase, 'wait-list');

  const q = query(waitListRef, where('email', '==', data.email));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return await addDoc(waitListRef, data);
 
  } else {
    throw new Error('Email Exist');
  }
};
