import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cart, setCart] = useState({});
  const [all_data, setAllData] = useState([]);

  useEffect(() => {
    async function getAllData() {
      try {
        let response = await fetch("http://localhost:5050/product/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        setAllData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getAllData();
  }, []);

  useEffect(() => {
    if (all_data.length > 0) {
      setCart(getDefaultCart());
    }
  }, [all_data]);

  const getDefaultCart = () => {
    let defaultCart = {};
    for (let i = 0; i < all_data.length; i++) {
      defaultCart[all_data[i].id] = 0;
    }
    return defaultCart;
  };

  const getTotalItemsCount = () => {
    let total = 0;
    for (let i = 0; i < all_data.length; i++) {
      total += cart[all_data[i].id];
    }
    return total;
  };

  const addToCart = (id) => {
    setCart((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  const emptyCart = () => {
    setCart(getDefaultCart());
  };

  const contextValue = {
    all_data,
    cart,
    removeFromCart,
    addToCart,
    emptyCart,
    getTotalItemsCount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
