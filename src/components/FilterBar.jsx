export default function FilterBar({ onFilterChange }) {
  const makes = ["All", "Tesla", "BMW", "Mercedes-Benz"];
  
  return (
    <div className="flex space-x-4 mb-6">
      <select 
        onChange={(e) => onFilterChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {makes.map(make => (
          <option key={make} value={make}>{make}</option>
        ))}
      </select>
    </div>
  );
}