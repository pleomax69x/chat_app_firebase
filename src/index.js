import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import firebase from "firebase";
// import "firebase/firebase-firestore";
// import "firebase/firebase-auth";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBW9rHiEs0gotGeGdaYa3L87FCW6GqXHz8",
//   authDomain: "chat-react-e6c57.firebaseapp.com",
//   projectId: "chat-react-e6c57",
//   storageBucket: "chat-react-e6c57.appspot.com",
//   messagingSenderId: "84598203425",
//   appId: "1:84598203425:web:f0c42dadb95972c31aaf60",
//   measurementId: "G-R15SHR2ZGZ",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const analytics = getAnalytics(app);

const app = initializeApp({
  apiKey: "AIzaSyBW9rHiEs0gotGeGdaYa3L87FCW6GqXHz8",
  authDomain: "chat-react-e6c57.firebaseapp.com",
  projectId: "chat-react-e6c57",
  storageBucket: "chat-react-e6c57.appspot.com",
  messagingSenderId: "84598203425",
  appId: "1:84598203425:web:f0c42dadb95972c31aaf60",
  measurementId: "G-R15SHR2ZGZ",
});

export const Context = createContext(null);

const auth = getAuth();
// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyBW9rHiEs0gotGeGdaYa3L87FCW6GqXHz8",
//   authDomain: "chat-react-e6c57.firebaseapp.com",
//   projectId: "chat-react-e6c57",
// });

const db = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        app,
        auth,
        db,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
