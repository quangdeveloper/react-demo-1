import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToastNotify from "./manager-qrterminal/shared/toast/toast";
import App from "./App";

ReactDOM.render(
    <div>
        <App/>
        <ToastNotify/>
    </div>
    , document.getElementById('root')
);
