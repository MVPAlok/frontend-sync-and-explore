import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredPackages = [
    {
      id: '1',
      name: 'Tropical Paradise',
      destination: 'Bali, Indonesia',
      duration: 7,
      price: 1299,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    },
    {
      id: '2',
      name: 'European Adventure',
      destination: 'Paris, France',
      duration: 5,
      price: 1499,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    },
    {
      id: '3',
      name: 'Mountain Escape',
      destination: 'Swiss Alps',
      duration: 6,
      price: 1699,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-4"
            >
              Discover Your Perfect Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              AI-powered travel planning that matches your style and preferences
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/signup"
                className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100"
              >
                Start Planning
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.destination}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-500">{pkg.duration} days</span>
                  </div>
                  <Link
                    to={`/package/${pkg.id}`}
                    className="mt-4 block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Planning</h3>
              <p className="text-gray-600">
                Get personalized travel recommendations based on your preferences
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">All-Inclusive Packages</h3>
              <p className="text-gray-600">
                Everything you need in one package - no hidden costs
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Group Planning</h3>
              <p className="text-gray-600">
                Easily coordinate trips with friends and family
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 