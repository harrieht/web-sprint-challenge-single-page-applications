import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import OrderForm from "./OrderForm";
import HomePage from "./HomePage";
import * as Yup from "yup";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza" id="order-pizza">Order Pizza</Link>
      </nav>
    <Routes>
        <Route exact path="/"element={<HomePage/>}/> 
        <Route exact path="pizza" element={<OrderForm />} />
      </Routes>

    </div>
  );
}
export default App;
