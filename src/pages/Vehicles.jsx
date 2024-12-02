import { useState } from 'react';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';

export default function Vehicles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMake, setSelectedMake] = useState('All');

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMake = selectedMake === 'All' || vehicle.make === selectedMake;
    return matchesSearch && matchesMake;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">Our Vehicles</h1>
      
      <div className="space-y-6 sm:space-y-8">
        <SearchBar onSearch={setSearchTerm} />
        <FilterBar onFilterChange={setSelectedMake} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
}