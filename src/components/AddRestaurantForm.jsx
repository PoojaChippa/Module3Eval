import { useState } from "react";
import { useRestaurant } from "../context/RestaurantContext";

export default function AddRestaurantForm() {
  const { restaurants, updateStorage } = useRestaurant();
  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "Rajasthani",
    parkingLot: true,
    image:
      "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
  });
  const handleAdd = () => {
    if (!form.restaurantName || !form.address) {
      alert("Form cannot be empty");
      return;
    }
    const newItem = {
      ...form,
      restaurantID: Date.now(),
      parkingLot: form.parkingLot === "true",
    };
    updateStorage([...restaurants, newItem]);
    alert("Restaurant added successfully");

    setForm({ ...form, restaurantName: "", address: "" });
  };

  return (
    <div className="form">
      <h3>Add Restaurant</h3>
      <input
        placeholder="Name"
        value={form.restaurantName}
        onChange={(e) => setForm({ ...form, restaurantName: e.target.value })}
      />
      <input
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <select
        onChange={(e) =>
          setForm({
            ...form,
            type: e.target.value,
          })
        }
      >
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>
      <select
        onChange={(e) => setForm({ ...form, parkingLot: e.target.value })}
      >
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
