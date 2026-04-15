import React,{useState} from "react";

const OrderForm = () =>{
    const [item,setItem] = useState("");
    const [price,setPrice] = useState("");
    const [orderLines,setOrderLines] = useState([]);
    const handleSubmit = async () => {
    try {
        const response = await fetch("http://localhost:8080/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                orderLines: orderLines
            })
        });
        const result = await response.json();
        console.log("Order saved with ID:", result);
        setOrderLines([]);
        setItem("");
        setPrice("");
    } catch (error) {
        console.error("Error submitting order:", error);
    }
};
    const handleRemoveItem = (index) => {
    const updatedList = orderLines.filter((_, i) => i !== index);
    setOrderLines(updatedList);
};
    const handleAddItem =() =>{
        if (!item || !price) return;
        const newLine = {
            item,
            price
        };
        setOrderLines([...orderLines, newLine]);
        //we need to clear inputs
        setItem("");
        setPrice("");
    }
    return(
        <div className="container">
            <h2>Create Your Order</h2>
            <div className="input-row">
            <input type="text" placeholder="item" value={item} onChange={(e) => setItem(e.target.value)}></input>
            <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
            </div>
            <button className="add-btn" onClick={handleAddItem}>Add Item</button>
            <ul>
                {orderLines.map((line, index) => (
                    <li key={index} className="order-item">
                        <span>{line.item} - ₹{line.price}</span>
                        <button className="remove-btn" onClick={() => handleRemoveItem(index)}>Discard</button>
                    </li>
                    
                ))}
            </ul>
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
    );

};
export default OrderForm;