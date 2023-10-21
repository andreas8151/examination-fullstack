import React, { createContext } from "react";
import { all_data } from "../Components/Assets/all-data";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const contextValue = { all_data };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
