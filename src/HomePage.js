import React from "react";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Pizza Shop!</h1>
            <p>Click the button below to order a pizza.</p>
            <Link to="/pizza" id="order-pizza">Order Pizza</Link>
        </div>
    );
}

export default HomePage;