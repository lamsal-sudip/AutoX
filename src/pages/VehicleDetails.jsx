import { useParams } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import ContactForm from '../components/ContactForm';
import { formatPrice } from '../utils/currency';

export default function VehicleDetails() {
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id === parseInt(id));

  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img 
            src={vehicle.image} 
            alt={vehicle.name}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{vehicle.name}</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-2">{vehicle.make} {vehicle.model}</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">
              {formatPrice(vehicle.price)}
            </p>
            <p className="text-gray-700 mt-4">{vehicle.description}</p>
          </div>
          
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Interested? Contact Us</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}