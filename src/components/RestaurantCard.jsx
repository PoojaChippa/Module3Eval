import { useNavigate } from "react-router-dom";
import { useRestaurant } from "../context/RestaurantContext";

export default function RestaurantCard({ data, isAdmin }) {
  const { restaurants, updateStorage } = useRestaurant();
  const navigate = useNavigate();
  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete")) return;
    updateStorage(
      restaurants.filter((r) => r.restaurantID !== data.restaurantID)
    );
    alert("Deleted Successfully");
  };
  return (
    <div className="card">
      <img src={data.image} />
      <h4>{data.restaurantname}</h4>
      <p>{data.address}</p>
      <p>{data.type}</p>
      <p>{data.parkingLot ? "parking Available" : "No Parking"}</p>
      {isAdmin && (
        <>
          <button
            onClick={() =>
              navigate("/admin/restaurants/update", { state: data })
            }
          >
            Update
          </button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}
