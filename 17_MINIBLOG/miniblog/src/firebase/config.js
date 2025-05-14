import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // 👈 Importando o getAuth

const firebaseConfig = {
  apiKey: "AIzaSyDNoy3vT8tQyqDR7cmrDqKhC8Dr4vFeW7g",
  authDomain: "miniblog-3f892.firebaseapp.com",
  projectId: "miniblog-3f892",
  storageBucket: "miniblog-3f892.firebasestorage.app",
  messagingSenderId: "869080804339",
  appId: "1:869080804339:web:94d4eed946360f85f50086",
  measurementId: "G-PP4H9TRWCD",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Agora o auth é configurado corretamente

export { db, auth }; // Exportando db e auth
