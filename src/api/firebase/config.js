import { initializeApp } from "firebase/app";
import { getFirestores } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0C7-wSNxYd1LQQokYbo0uilwD8KdOls8",
  authDomain: "routerconnect-5bc54.firebaseapp.com",
  projectId: "routerconnect-5bc54",
  storageBucket: "routerconnect-5bc54.appspot.com",
  messagingSenderId: "874462440728",
  appId: "1:874462440728:web:a27454b20a41dfd88e026d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestores(app);

export { db };