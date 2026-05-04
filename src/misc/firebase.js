import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyAFJyxfqHzSDyFb09BNCu7TAaftybqZunI",
    authDomain: "chat-app-bd678.firebaseapp.com",
    databaseURL: "https://chat-app-bd678-default-rtdb.firebaseio.com",
    projectId: "chat-app-bd678",
    storageBucket: "chat-app-bd678.firebasestorage.app",
    messagingSenderId: "981025095831",
    appId: "1:981025095831:web:8f52dd98facd246866e9d2",
    measurementId: "G-FLX2Z07YXM"
  };

  const app = firebase.initializeApp(firebaseConfig);