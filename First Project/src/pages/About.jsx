import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8">About Sync & Explore</h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              Welcome to Sync & Explore, your AI-powered travel companion that makes trip planning effortless and personalized. 
              We understand that every traveler is unique, and that's why we've created a platform that adapts to your preferences, 
              lifestyle, and travel goals.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to revolutionize the way people plan and experience their travels. We believe that travel planning 
              should be as enjoyable as the trip itself. By leveraging artificial intelligence, we create personalized travel 
              experiences that match your unique preferences and requirements.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="text-center">
                <div className="text-4xl text-primary-600 mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-gray-600">
                  Our AI analyzes your preferences, lifestyle, and travel history to understand your unique travel style.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-primary-600 mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
                <p className="text-gray-600">
                  Get travel packages and itineraries tailored to your specific needs and preferences.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-primary-600 mb-4">👥</div>
                <h3 className="text-xl font-semibold mb-2">Group Coordination</h3>
                <p className="text-gray-600">
                  Easily coordinate trips with friends and family, ensuring everyone's preferences are considered.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Why Choose Us</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>AI-powered personalization that understands your travel style</li>
              <li>All-inclusive packages with no hidden costs</li>
              <li>Easy group coordination and planning</li>
              <li>24/7 customer support</li>
              <li>Secure and reliable booking system</li>
              <li>Flexible cancellation policies</li>
            </ul>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h2>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 