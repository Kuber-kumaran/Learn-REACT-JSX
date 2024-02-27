import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Cart } from './FormSamples/Cart';
// import { QRcode } from './Components/QRcode';
// import "./Qrcode.css";
// import { UserCard } from './UserCard';
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UserCard /> */}
    {/* <QRcode/> */}
    <Cart/>
  </React.StrictMode>
);


