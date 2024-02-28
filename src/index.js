import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AdviceApp } from './FormSamples/AdviceApp';
// import RegForm from './FormSamples/RegForm';
// import UserDetails from './FormSamples/UserDetails';
// import { Cart } from './FormSamples/Cart';
// import { QRcode } from './Components/QRcode';
// import "./Qrcode.css";
// import { UserCard } from './UserCard';
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UserCard /> */}
    {/* <QRcode/> */}
    {/* <UserDetails/> */}
    {/* <Cart/> */}
    {/* <RegForm/> */}

    <AdviceApp/>
    
  </React.StrictMode>
);


