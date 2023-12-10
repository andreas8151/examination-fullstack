import React, { useEffect, useState } from "react";
import { getAllOrders } from "./getAllOrders";
import { patchOrderStatus } from "./patchOrderStatus";
import "./allOrders.css";

export const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      let response = await getAllOrders();
      setAllOrders(response);
    }
    fetchOrders();
  }, []);

  const handleButtonClick = async (orderId, orderIndex) => {
    await patchOrderStatus(orderId);

    setAllOrders((prevOrders) => {
      const updatedOrders = [...prevOrders];
      updatedOrders[orderIndex].status = 1 - updatedOrders[orderIndex].status;
      return updatedOrders;
    });
  };

  return (
    <div id="order-container">
      <h1>All Orders</h1>
      {allOrders &&
        allOrders.map((order, index) => (
          <div className="order-card" key={order.id}>
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
            <button
              style={{ background: order.status === 1 ? "none" : "salmon" }}
              onClick={() => handleButtonClick(order.id, index)}
            >
              {order.status === 1 ? "✅" : "Mark as Paid"}
            </button>
          </div>
        ))}
    </div>
  );
};
