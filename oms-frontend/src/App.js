import './App.css';
import React, { useState } from 'react'; 
import OrderForm from './component/orderform';
import OrderHistory from './component/OrderHistory';

function App() {
  const [page, setPage] = useState("form");
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={() => setPage("form")}>Create Order</button>
        <button onClick={() => setPage("history")}>Order History</button>
      </div>
      {page === "form" ? <OrderForm /> : <OrderHistory/>}
    </div>
  );
}

export default App;
