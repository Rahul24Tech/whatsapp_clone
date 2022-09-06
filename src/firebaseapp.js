import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCSWaDFi-5spDt5Nj2JuEAVaCu4ZPW8Wwo",
  authDomain: "whatsapp-yt-d05d7.firebaseapp.com",
  projectId: "whatsapp-yt-d05d7",
  storageBucket: "whatsapp-yt-d05d7.appspot.com",
  messagingSenderId: "92954699451",
  appId: "1:92954699451:web:61f1c6528408f43ef76b9e",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
export default db;
