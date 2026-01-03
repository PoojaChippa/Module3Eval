import Navbar from "../components/Navbar";
import AddRestaurantForm from "../components/AddRestaurantForm";
import RestaurantCard from "../components/RestaurantCard";
import { useRestaurant } from "../context/RestaurantContext";

export default function AdminDashboard() {
  const { restaurants } = useRestaurant();
  return (
    <>
      <Navbar />
      <AddRestaurantForm />
      <div className="grid">
        {restaurants.map((r) => (
          <RestaurantCard key={r.restaurantID} data={r} isAdmin />
        ))}
      </div>
    </>
  );
}
