import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/currency';

export default function VehicleCard({ vehicle }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={vehicle.image} 
        alt={vehicle.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
        <p className="text-gray-600 mb-2">{vehicle.make} {vehicle.model}</p>
        <p className="text-lg font-bold text-gray-900">
          {formatPrice(vehicle.price)}
        </p>
        <Link 
          to={`/vehicles/${vehicle.id}`}
          className="mt-4 block text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}