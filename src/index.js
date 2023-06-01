import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBeFiug-CaNpZo8lh7FrSKuT7vzWsxtOko",
  authDomain: "my-react-blog-df4a1.firebaseapp.com",
  projectId: "my-react-blog-df4a1",
  storageBucket: "my-react-blog-df4a1.appspot.com",
  messagingSenderId: "885278799860",
  appId: "1:885278799860:web:202299937cacb079be2ba1"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
