import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAuthModalClose = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <>
      <header className="bg-gray-800 text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold">
                AutoX
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setShowLogin(true)}
                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg flex items-center space-x-1 mr-4"
              >
                <FaUser size={14} />
                <span className="text-sm">Login</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/vehicles" className="hover:text-gray-300">Vehicles</Link>
              <Link to="/about" className="hover:text-gray-300">About</Link>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <FaUser />
                <span>Login</span>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <Link to="/" className="hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/vehicles" className="hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>Vehicles</Link>
                <Link to="/about" className="hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/contact" className="hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Auth Modals */}
      {(showLogin || showRegister) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
            {showLogin ? (
              <LoginForm 
                onClose={handleAuthModalClose} 
                setShowLogin={setShowLogin}
                setShowRegister={setShowRegister}
              />
            ) : (
              <RegisterForm 
                onClose={handleAuthModalClose}
                setShowLogin={setShowLogin}
                setShowRegister={setShowRegister}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}