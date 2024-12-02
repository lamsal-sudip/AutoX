import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Contact Us
            </h3>
            <div className="space-y-2">
              <p>123 Auto Drive</p>
              <p>Cartown, CT 12345</p>
              <p className="flex items-center mt-2">
                <FaPhone className="mr-2" /> (555) 123-4567
              </p>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-6">
              <a href="#" className="hover:text-gray-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FaClock className="mr-2" /> Hours
            </h3>
            <div className="space-y-2">
              <p>Mon-Fri: 9am - 8pm</p>
              <p>Saturday: 10am - 6pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 AutoX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}