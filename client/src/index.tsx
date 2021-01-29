import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from "dotenv";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
config();

const domain = process.env.REACT_APP_AUTH0_DOMAIN!
const clientID = process.env.REACT_APP_AUTH0_ID!

console.log(domain);
console.log(`${window.location.origin}/login`);



ReactDOM.render(
  <Auth0Provider domain={"dev-8a3tf27l.us.auth0.com"} clientId={"z3qAL1VGipxNe1jfuRDrJ4csd5vTw0qH"} redirectUri={`${window.location.origin}/login`}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
