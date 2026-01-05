import { createContext, useContext, useEffect, useState } from "react";

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("evalData")) || [];
    setRestaurants(data);
  }, []);

  const updateStorage = (data) => {
    setRestaurants(data);
    localStorage.setItem("evalData", JSON.stringify(data));
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, updateStorage }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);
