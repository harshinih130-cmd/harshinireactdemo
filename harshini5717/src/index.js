import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var sobj={
  rno:1001,
  sname:"harshini",
  rank:[37,10,45,44],
  grade:"super",
  location:"karur",
  issingle:false,
  aadhar:"123456789",
  phone: "9843538508",
  height:"143cm",
  hobbies:{
    hob1:"mobile phone",
    hob2:"dancing",
    hob3:"speaking"
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={sobj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
