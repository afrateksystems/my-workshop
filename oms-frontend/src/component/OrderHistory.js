import React, { useEffect, useState } from "react";

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchOrders = async () => {
        try {
            const response = await fetch("http://localhost:8080/order");
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchOrders();
    }, []);
    if (loading) return <p className="empty">empty</p>;
    return (
        <div className="container">
            <h2>Order History</h2>
            {orders.length === 0 ? (
                <p className="empty">No orders found</p>
            ) : (
                orders.map((order) => (
                    <div key={order.id} className="order-block">
                        <h4>Order #{order.id}</h4>
                        <ul>
                            {order.orderLines.map((line, index) => (
                                <li key={index} className="order-item">
                                    <span>{line.item}</span>
                                    <span>₹{line.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )))}
        </div>
    );
};

export default OrderHistory;