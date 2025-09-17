import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../store/slices/authSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    region: '',
    lifestyle: '',
    profession: '',
    livingStandards: '',
    holidayPreferences: [],
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const preferences = [...formData.holidayPreferences];
      if (checked) {
        preferences.push(value);
      } else {
        const index = preferences.indexOf(value);
        if (index > -1) {
          preferences.splice(index, 1);
        }
      }
      setFormData({
        ...formData,
        holidayPreferences: preferences,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Here you would typically make an API call to register
      // For now, we'll simulate a successful registration
      const mockUser = {
        id: '1',
        email: formData.email,
        name: formData.name,
        preferences: {
          region: formData.region,
          lifestyle: formData.lifestyle,
          profession: formData.profession,
          livingStandards: formData.livingStandards,
          holidayPreferences: formData.holidayPreferences,
        },
      };

      dispatch(setUser(mockUser));
      navigate('/dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              sign in to your account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                Region
              </label>
              <select
                id="region"
                name="region"
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={formData.region}
                onChange={handleChange}
              >
                <option value="">Select a region</option>
                <option value="North America">North America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="South America">South America</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>

            <div>
              <label htmlFor="lifestyle" className="block text-sm font-medium text-gray-700">
                Lifestyle
              </label>
              <select
                id="lifestyle"
                name="lifestyle"
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={formData.lifestyle}
                onChange={handleChange}
              >
                <option value="">Select your lifestyle</option>
                <option value="Active">Active</option>
                <option value="Moderate">Moderate</option>
                <option value="Relaxed">Relaxed</option>
              </select>
            </div>

            <div>
              <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                id="profession"
                required
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={formData.profession}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="livingStandards" className="block text-sm font-medium text-gray-700">
                Living Standards
              </label>
              <select
                id="livingStandards"
                name="livingStandards"
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={formData.livingStandards}
                onChange={handleChange}
              >
                <option value="">Select your living standards</option>
                <option value="Upper Class">Upper Class</option>
                <option value="Upper Middle Class">Upper Middle Class</option>
                <option value="Middle Class">Middle Class</option>
                <option value="Lower Middle Class">Lower Middle Class</option>
                <option value="Lower Class">Lower Class</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Holiday Preferences</label>
              <div className="mt-2 space-y-2">
                {['Adventure', 'Cultural', 'Relaxation', 'Luxury', 'Budget', 'Family'].map((preference) => (
                  <div key={preference} className="flex items-center">
                    <input
                      id={preference}
                      name="holidayPreferences"
                      type="checkbox"
                      value={preference}
                      checked={formData.holidayPreferences.includes(preference)}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={preference} className="ml-2 block text-sm text-gray-900">
                      {preference}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup; 