import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/CSS/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire'


const firebaseConfig = {
  apiKey: "AIzaSyCSkps3B--SE2leTkAd-l0oYSVXJ_4D7Bk",
  authDomain: "test-pruebas-12778.firebaseapp.com",
  databaseURL: "https://test-pruebas-12778-default-rtdb.firebaseio.com",
  projectId: "test-pruebas-12778",
  storageBucket: "test-pruebas-12778.appspot.com",
  messagingSenderId: "36464234697",
  appId: "1:36464234697:web:232479e37c5a1a76a43d18"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
