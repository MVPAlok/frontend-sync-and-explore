import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'AI-Powered Planning',
      description: 'Our advanced AI analyzes your preferences, lifestyle, and travel history to create personalized travel recommendations.',
      icon: '🤖',
      color: 'primary',
    },
    {
      title: 'All-Inclusive Packages',
      description: 'Everything you need in one package - flights, accommodation, activities, and more. No hidden costs.',
      icon: '🎯',
      color: 'primary',
    },
    {
      title: 'Group Coordination',
      description: "Easily plan trips with friends and family. Our AI ensures everyone's preferences are considered.",
      icon: '👥',
      color: 'primary',
    },
    {
      title: 'Smart Itinerary',
      description: 'Get a detailed day-by-day itinerary that matches your pace and interests.',
      icon: '📅',
      color: 'primary',
    },
    {
      title: 'Real-time Updates',
      description: 'Stay informed with real-time updates about your trip, including weather and local events.',
      icon: '🔔',
      color: 'primary',
    },
    {
      title: 'Local Experiences',
      description: 'Discover authentic local experiences and hidden gems recommended by our AI.',
      icon: '🌟',
      color: 'primary',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8">Our Features</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover how Sync & Explore makes travel planning effortless and enjoyable with our innovative features.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`text-4xl text-${feature.color}-600 mb-4`}>{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Experience the Future of Travel?</h2>
            <p className="text-gray-600 mb-6">
              Join thousands of happy travelers who have discovered their perfect trips with Sync & Explore.
            </p>
            <a
              href="/signup"
              className="btn btn-primary text-lg px-8 py-3"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features; 