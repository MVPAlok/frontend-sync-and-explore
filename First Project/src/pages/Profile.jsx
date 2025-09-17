import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { setUser } from '../store/slices/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    region: user?.preferences?.region || '',
    lifestyle: user?.preferences?.lifestyle || '',
    profession: user?.preferences?.profession || '',
    livingStandards: user?.preferences?.livingStandards || '',
    holidayPreferences: user?.preferences?.holidayPreferences || [],
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
      preferences: {
        region: formData.region,
        lifestyle: formData.lifestyle,
        profession: formData.profession,
        livingStandards: formData.livingStandards,
        holidayPreferences: formData.holidayPreferences,
      },
    };
    dispatch(setUser(updatedUser));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Profile</h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="btn btn-secondary"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="label">Region</label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="input"
                    required
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
                  <label className="label">Lifestyle</label>
                  <select
                    name="lifestyle"
                    value={formData.lifestyle}
                    onChange={handleChange}
                    className="input"
                    required
                  >
                    <option value="">Select your lifestyle</option>
                    <option value="Active">Active</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Relaxed">Relaxed</option>
                  </select>
                </div>

                <div>
                  <label className="label">Profession</label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="label">Living Standards</label>
                  <select
                    name="livingStandards"
                    value={formData.livingStandards}
                    onChange={handleChange}
                    className="input"
                    required
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
                  <label className="label">Holiday Preferences</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Adventure', 'Cultural', 'Relaxation', 'Luxury', 'Budget', 'Family'].map((preference) => (
                      <div key={preference} className="flex items-center">
                        <input
                          type="checkbox"
                          id={preference}
                          name="holidayPreferences"
                          value={preference}
                          checked={formData.holidayPreferences.includes(preference)}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor={preference} className="ml-2 block text-sm text-gray-900">
                          {preference}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="text-gray-900">{user?.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-900">{user?.email}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Preferences</h3>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Region</p>
                      <p className="text-gray-900">{user?.preferences?.region}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Lifestyle</p>
                      <p className="text-gray-900">{user?.preferences?.lifestyle}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Profession</p>
                      <p className="text-gray-900">{user?.preferences?.profession}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Living Standards</p>
                      <p className="text-gray-900">{user?.preferences?.livingStandards}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Holiday Preferences</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {user?.preferences?.holidayPreferences.map((preference) => (
                      <span
                        key={preference}
                        className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
                      >
                        {preference}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile; 