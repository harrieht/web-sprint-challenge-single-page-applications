import React, { useState } from "react";

const OrderForm = () => {
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [toppings, setToppings] = useState({
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
    });
    const [specialInstructions, setSpecialInstructions] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handleToppingsChange = (event) => {
        const { name, checked } = event.target;
        setToppings((prevToppings) => ({
            ...prevToppings,
            [name]: checked,
        }));
    };

    const handleSpecialInstructionsChange = (event) => {
        setSpecialInstructions(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const order = {
            name,
            size,
            ...toppings,
            special: specialInstructions,
        };
    
        setName('');
        setSize('');
        setToppings({
            topping1: false,
            topiing2: false,
            topping3: false,
            topping4: false,
        });
        setSpecialInstructions('');
    };

    return (
        <div> 
            <h2>Order Pizza</h2>
            <form id="pizza-form" onSubmit={handleSubmit}>
                <label htmlFor="name-input">Name:</label>
                <input 
                id="name-input"
                type="text"
                value={name}
                onChange={handleNameChange}
                required
                />

                <label htmlFor="size-dropdown">Size:</label>
                <select
                id="size-dropdown"
                value={size}
                onChange={handleSizeChange}
                required
                >
                    <option value="">Select size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    </select>

                    <fieldset>
                        <legend>Toppings:</legend>
                        <label>
                            <input
                            type="checkbox"
                            name="topping1"
                            checked={toppings.topping1}
                            onChange={handleToppingsChange}
                            />
                            Topping 1
                        </label>
                        <label>
                        <input
                            type="checkbox"
                            name="topping2"
                            checked={toppings.topping2}
                            onChange={handleToppingsChange}
                            />
                            Topping 2
                        </label>
                        <label>
                        <input
                            type="checkbox"
                            name="topping3"
                            checked={toppings.topping3}
                            onChange={handleToppingsChange}
                            />
                            Topping 3
                        </label>
                        <label>
                        <input
                            type="checkbox"
                            name="topping4"
                            checked={toppings.topping4}
                            onChange={handleToppingsChange}
                            />
                            Topping 4
                        </label>
                    </fieldset>

                    <label htmlFor="special-text">Special Instructions:</label>
                    <textarea
                    id="special-text"
                    value={specialInstructions}
                    onChange={handleSpecialInstructionsChange}
                    />

                    <button type="submit" id="order-button">
                        Add to Order
                    </button>
            </form>
        </div>
    );

}

export default OrderForm;