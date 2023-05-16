import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import OrderForm from "./OrderForm";

ReactDOM.render(<BrowserRouter>
<OrderForm />
</BrowserRouter>, 
document.getElementById("root")
);
