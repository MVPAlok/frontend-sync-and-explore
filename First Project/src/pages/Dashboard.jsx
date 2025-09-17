import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  const upcomingTrips = [
    {
      id: 1,
      name: 'Tropical Paradise',
      destination: 'Bali, Indonesia',
      startDate: '2024-07-15',
      endDate: '2024-07-22',
      status: 'Confirmed',
    },
    {
      id: 2,
      name: 'European Adventure',
      destination: 'Paris, France',
      startDate: '2024-08-01',
      endDate: '2024-08-07',
      status: 'Pending',
    },
  ];

  const recommendedPackages = [
    {
      id: 1,
      name: 'Mountain Escape',
      destination: 'Swiss Alps',
      duration: 6,
      price: 1699,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    },
    {
      id: 2,
      name: 'Cultural Journey',
      destination: 'Kyoto, Japan',
      duration: 8,
      price: 1899,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Welcome back, {user?.name}!</h1>

          {/* Upcoming Trips Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Your Upcoming Trips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingTrips.map((trip) => (
                <motion.div
                  key={trip.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">{trip.name}</h3>
                  <p className="text-gray-600 mb-4">{trip.destination}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{trip.startDate} - {trip.endDate}</span>
                    <span className={`px-2 py-1 rounded ${
                      trip.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {trip.status}
                    </span>
                  </div>
                  <button className="btn btn-primary w-full">View Details</button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Recommended Packages Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Recommended for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedPackages.map((pkg) => (
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
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-primary-600 font-semibold">
                        ${pkg.price}
                      </span>
                      <span className="text-gray-500">{pkg.duration} days</span>
                    </div>
                    <button className="btn btn-primary w-full">View Package</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard; 