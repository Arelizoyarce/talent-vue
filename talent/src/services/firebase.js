import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, orderBy, query } from "firebase/firestore"
import { collection, getDocs, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDvT4_tHYpD7VY-jIKbrsM_gcNNUDFC2pM",
  authDomain: "talent-innovation-74e34.firebaseapp.com",
  projectId: "talent-innovation-74e34",
  storageBucket: "talent-innovation-74e34.appspot.com",
  messagingSenderId: "1087849464744",
  appId: "1:1087849464744:web:f40e3e6c3b7f8ee32ed39d",
  measurementId: "G-6J9W4LTK4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//courses and mentors and chat
export const getData = (nameCollection) => {
  return getDocs(collection(db, nameCollection));
}
// add menssage
export const addData = (menssage) => {
  return addDoc(collection(db, 'chats'), menssage)
}

//get menssage
export const getMenssage = (callback) => {
  return onSnapshot(query(collection(db, 'chats'), orderBy('time')), callback)
}

