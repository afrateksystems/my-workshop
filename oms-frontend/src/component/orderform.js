import React,{useState} from "react";

const OrderForm = () =>{
    const [item,setItem] = useState("");
    const [price,setPrice] = useState("");
    const [orderLines,setOrderLines] = useState([]);
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [pincode, setPincode] = useState("");
    const [quantity, setQuantity] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async () => {
        if (!city || !street || !pincode || orderLines.length === 0) {
            setMessage("Please fill all fields and add at least one item.");
            return;
        }
    try {
        const response = await fetch("http://localhost:8080/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                orderLines: orderLines,
                address: {
                    city,
                    street,
                    pincode
                }
            })
        });
        const result = await response.json();

            if (response.ok) {
                // Show success message if order is saved successfully
                setMessage(`Order saved successfully with ID: ${result.id}`);
                setOrderLines([]);
                setItem("");
                setPrice("");
                setQuantity("");
                setCity("");
                setStreet("");
                setPincode("");
            } else {
                // Show error message if something went wrong
                setMessage("Failed to save order. Please try again.");
            }
        } catch (error) {
            setMessage("Error submitting order: " + error.message);
        }
};
    const handleRemoveItem = (index) => {
    const updatedList = orderLines.filter((_, i) => i !== index);
    setOrderLines(updatedList);
};
    const handleAddItem =() =>{
        if (!item || !price || !quantity) return;
        const newLine = {
            item,
            price,
            quantity
        };
        setOrderLines([...orderLines, newLine]);
        //we need to clear inputs
        setItem("");
        setPrice("");
        setQuantity("");
    }
    return(
        <div className="container">
            <h2>Create Your Order</h2>
            <div className="input-row">
            <input type="text" placeholder="item" value={item} onChange={(e) => setItem(e.target.value)}></input>
            <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
            <input type="number" placeholder="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            <input type="text" placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)}/>
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
            <input type="text" placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)}/>
            </div>
            <button className="add-btn" onClick={handleAddItem}>Add Item</button>
            <ul>
                {orderLines.map((line, index) => (
                    <li key={index} className="order-item">
                        <span>{line.item} - ₹{line.price} × {line.quantity}</span>
                        <button className="remove-btn" onClick={() => handleRemoveItem(index)}>Discard</button>
                    </li>
                    
                ))}
            </ul>
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
    );

};
export default OrderForm;