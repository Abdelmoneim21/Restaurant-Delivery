import { createContext, useContext, useState } from "react";

const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
  const [priceData, setPriceData] = useState({
    subtotal: 0,
    deliveryFee: 2,
    total: 0,
  });

  return (
    <PriceContext.Provider value={{ priceData, setPriceData }}>
      {children}
    </PriceContext.Provider>
  );
};

export const usePrice = () => useContext(PriceContext);
