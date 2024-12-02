import { Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import HeroSwiper from '../components/HeroSwiper';

export default function Home() {
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <div>
      <HeroSwiper />
      
      {/* Featured Vehicles */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Featured Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
}