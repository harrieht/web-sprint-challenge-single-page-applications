import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import * as Yup from "yup";


ReactDOM.render(<BrowserRouter>
<App />
</BrowserRouter>, 
document.getElementById("root")
);
