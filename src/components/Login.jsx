import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userType) {
      alert('Please select whether you are a Customer or Retailer!');
      return;
    }
    handleLogin({ userType, email, password });
  };

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">💰</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Finbuddy!</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">I am a:</label>
            <div className="grid grid-cols-2 gap-4">
              <label className="relative">
                <input
                  type="radio"
                  name="userType"
                  value="customer"
                  className="sr-only"
                  onChange={() => setUserType('customer')}
                />
                <div className="user-type-card border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors">
                  <div className="text-center">
                    <span className="text-2xl mb-2 block">🛍️</span>
                    <span className="text-sm font-medium text-gray-700">Customer</span>
                  </div>
                </div>
              </label>
              <label className="relative">
                <input
                  type="radio"
                  name="userType"
                  value="retailer"
                  className="sr-only"
                  onChange={() => setUserType('retailer')}
                />
                <div className="user-type-card border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-green-500 transition-colors">
                  <div className="text-center">
                    <span className="text-2xl mb-2 block">🏪</span>
                    <span className="text-sm font-medium text-gray-700">Retailer</span>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Common Fields */}
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;