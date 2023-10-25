import React from "react";
import { getAllOrders } from "./getAllOrder";
import { useState, useEffect } from "react";
import "./allOrder.css";

export const AllOrders = () => {
  const [allOrders, setAllOrders] = useState("");

  useEffect(() => {
    async function orders() {
      let response = await getAllOrders();
      setAllOrders(response);
    }
    orders();
  }, []);

  return (
    <div className="order-container">
      <h1>All Orders</h1>
      {allOrders &&
        allOrders.map((order) => {
          return (
            <div className="order-card">
              <hr />

              <h3>name: {order.name}</h3>
              <p>
                <strong>email: </strong>
                {order.email}
              </p>
              <p>
                <strong>address:</strong> {order.address}
              </p>
              <p>
                <strong>phone: </strong>
                {order.phone}
              </p>
              <p>
                <strong>products:</strong> {order.products}
              </p>
              <p>
                <strong>total:</strong> ${order.price}
              </p>
              <p>
                <strong>order-date:</strong> {order.date}
              </p>
              <button>Paid</button>
            </div>
          );
        })}
    </div>
  );
};
