import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRestaurant } from "../context/RestaurantContext";

export default function UpdateRestaurant() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { restaurants, updateStorage } = useRestaurant();
  const [form, setForm] = useState(state);
  const handleUpdate = () => {
    if (!window.confirm("Confirm update?")) return;
    const updated = restaurants.map((r) =>
      r.restaurantID === form.restaurantID ? form : r
    );
    updateStorage(updated);
    alert("Updated successfully");
    navigate("/admin/dashboard");
  };
  return (
    <div className="form">
      <h3>Update Restaurant</h3>
      <input
        value={form.restaurantName}
        onChange={(e) => setForm({ ...form, restaurantName: e.target.value })}
      />
      <input
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
