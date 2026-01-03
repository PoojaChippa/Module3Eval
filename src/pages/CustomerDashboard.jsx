import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
import { useRestaurant } from "../context/RestaurantContext";

export default function CustomerDashboard() {
  const { restaurants } = useRestaurant();
  return (
    <>
      <Navbar />
      <div className="grid">
        {restaurants.map((r) => (
          <RestaurantCard key={r.restaurantID} data={r} />
        ))}
      </div>
    </>
  );
}
