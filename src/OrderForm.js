import React from 'react';
import React, { useState } from 'react';

const OrderForm = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [size, setSize] = useState('');
    const [toppings, setToppings] = useState([]);
    const [specialInstructions, setSpecialInstructions] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
    setName(value);

    if(value.length < 2) {
        setNameError('Name must be at least 2 characters');
    } else {
        setNameError('');
    }
};

    const handleSizeChange = (event) => {
        const value = event.target.value;
        setSize(value);
    };
    
    const handleToppingsChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setToppings((prevToppings) => [...prevToppings, value]);
        } else {
            setToppings((prevToppings) =>
            prevToppings.filter((topping) => topping !== value)
            );
        }
    };

    const handleSpecialInstructionsChange = (event) => {
        const value = event.target.value;
        setSpecialInstructions(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            name,
            size,
            toppings,
            specialInstructions,
        };
        
        setName('');
        setSize('');
        setToppings([]);
        setSpecialInstructions('');
    };


    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <form id="pizza-form">
                <label htmlFor ="name-input">Name:</label>
                <input
                type="text"
                id="name-input"
                value={name}
                onChange={handleNameChange}
                />
                {nameError && <p>{nameError}</p>}


                <label htmlFor ="size-dropdown">Size:</label>
                <select id="size-dropdown" value={size} onChange={handleSizeChange}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>

                <label>Toppings:</label>
                <div>
                    <label htmlFor="topping1">
                        <input
                        type="checkbox"
                        id="topping1"
                        value="topping1"
                        onChange={handleToppingsChange}
                        />
                    </label>
                    <label htmlFor="topping2">
                        <input
                        type="checkbox"
                        id="topping2"
                        value="topping2"
                        onChange={handleToppingsChange}
                        />
                    </label>
                    <label htmlFor="special-text">Special Instructions:</label>
                    <input
                    type="text"
                    id="special-text"
                    value={specialInstructions}
                    onChange={handleSpecialInstructionsChange}
                    />

                    <button type="submit" id="order-button">
                        Add to Order
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OrderForm;