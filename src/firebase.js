import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHAAvaDjqjlBVAljcckierN7Db7xf4qkA",
  authDomain: "instagram-clone-react-fbc70.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-fbc70.firebaseio.com",
  projectId: "instagram-clone-react-fbc70",
  storageBucket: "instagram-clone-react-fbc70.appspot.com",
  messagingSenderId: "109222237131",
  appId: "1:109222237131:web:47ad9e91b40adef59fdc4e",
  measurementId: "G-HZEX2MGDK4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
