import { useEffect, useRef, useState } from "react";
import { useRestaurant } from "../context/RestaurantContext";

export default function Navbar() {
  const { updateStorage } = useRestaurant();
  const inputRef = useRef();
  const [query, setQuery] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (value) => {
    setQuery(value);
    const all = JSON.parse(localStorage.getItem("evaldata")) || [];
    const filtered = all.filter(
      (r) =>
        r.RestaurantName.toLowerCase().includes(value.toLowerCase()) ||
        r.address.toLowerCase().includes(value.toLowerCase())
    );
    updateStorage(filtered);
  };
  return (
    <div className="navbar">
      <input
        ref={inputRef}
        placeholder="Search by name or address"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
