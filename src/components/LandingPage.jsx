import React from 'react';

const LandingPage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showUserTypeSelection = () => {
    alert('Redirecting to user type selection...');
  };

  return (
    <div id="landingPage">
      {/* Hero Section */}
      <section className="hero-gradient py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Financial Journey Starts Here 🚀
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Finbuddy empowers customers and retailers with smart pay-later solutions, business funding, and financial education for everyone in the family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={showUserTypeSelection}
                  className="bg-yellow-400 text-purple-800 font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors text-lg"
                >
                  <h1 className="text-2xl">Get Started Free 🎉.</h1>
                  <p className="text-sm">Don't worry it's always free</p>
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-purple-800 transition-colors text-lg"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="text-center">
              <div className="relative">
                {/* Main Customer Image */}
                <div className="bg-white rounded-3xl p-8 floating" style={{ opacity: 0.4 }}>
                  <div className="text-8xl mb-4">👨‍👩‍👧‍👦</div>
                  <div className="text-4xl mb-2">💳</div>
                  <div className="text-2xl">📱</div>
                </div>

                {/* Floating Elements */}
                <div
                  className="absolute -top-4 -left-4 bg-yellow-400 rounded-full p-3 floating"
                  style={{ animationDelay: '0.5s' }}
                >
                  <span className="text-2xl">💰</span>
                </div>
                <div
                  className="absolute -top-2 -right-6 bg-green-400 rounded-full p-3 floating"
                  style={{ animationDelay: '1s' }}
                >
                  <span className="text-2xl">📈</span>
                </div>
                <div
                  className="absolute -bottom-4 left-8 bg-blue-400 rounded-full p-3 floating"
                  style={{ animationDelay: '1.5s' }}
                >
                  <span className="text-2xl">🏪</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🌟 Powerful Features for Everyone</h2>
            <p className="text-xl text-gray-600">Discover how Finbuddy transforms your financial experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              {
                icon: '🛍️',
                title: 'Buy Now, Pay Later',
                description: 'Shop your favorite items and pay in flexible installments. No hidden fees, transparent terms.',
                features: ['Instant approval', 'Flexible payment plans', 'No interest on time'],
                gradient: 'from-blue-50 to-purple-50',
              },
              {
                icon: '🏪',
                title: 'Business Solutions',
                description: 'Grow your business with instant funding, payment processing, and customer management tools.',
                features: ['Up to $50K funding', '24-hour approval', 'SME tools included'],
                gradient: 'from-green-50 to-teal-50',
              },
              {
                icon: '👩',
                title: 'Women Empowerment',
                description: "Specialized financial tools and community support designed for women's unique financial journey.",
                features: ['Financial independence', 'Community support', 'Career growth resources'],
                gradient: 'from-pink-50 to-rose-50',
              },
              {
                icon: '📚',
                title: 'Financial Education',
                description: 'Interactive courses, achievements, and personalized learning paths to boost your financial literacy.',
                features: ['Interactive lessons', 'Achievement system', 'Progress tracking'],
                gradient: 'from-yellow-50 to-orange-50',
              },
              {
                icon: '👶',
                title: 'Kids Financial Learning',
                description: 'Fun games, investment trees, and parental controls to teach children about money management.',
                features: ['Investment tree game', 'Parental controls', 'Educational stories'],
                gradient: 'from-purple-50 to-indigo-50',
              },
              {
                icon: '📊',
                title: 'Smart Analytics',
                description: 'Real-time insights, spending patterns, and personalized recommendations for better financial decisions.',
                features: ['Spending insights', 'Payment reminders', 'Financial health score'],
                gradient: 'from-cyan-50 to-blue-50',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`card-hover bg-gradient-to-br ${feature.gradient} rounded-xl p-8 border`}
              >
                <div className="feature-icon text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">💎 Why Choose Finbuddy?</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied customers and businesses</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  { icon: '🚀', title: 'Instant Approval', description: 'Get approved in seconds with our AI-powered credit assessment system.' },
                  { icon: '🔒', title: 'Bank-Level Security', description: 'Your data is protected with 256-bit encryption and advanced fraud detection.' },
                  { icon: '📱', title: 'Mobile-First Design', description: 'Seamless experience across all devices with our responsive design.' },
                  { icon: '🎯', title: 'Personalized Experience', description: 'AI-driven recommendations tailored to your financial goals and habits.' },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      <span className="text-2xl">{benefit.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer-Centric Image */}
            <div className="text-center">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {[
                    { icon: '👨‍💼', title: 'Business Owner', description: 'Growing with funding' },
                    { icon: '👩‍🎓', title: 'Student', description: 'Learning & saving' },
                    { icon: '👨‍👩‍👧‍👦', title: 'Family', description: 'Teaching kids money' },
                    { icon: '🛍️', title: 'Shopper', description: 'Buy now, pay later' },
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-4">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="text-sm font-semibold text-gray-700">{item.title}</p>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">💝</div>
                  <p className="font-bold text-gray-800">One App, Everyone's Needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Financial Life? 🌟</h2>
          <p className="text-xl text-white opacity-90 mb-8">Join thousands of users who are already enjoying smarter financial solutions</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={showUserTypeSelection}
              className="bg-yellow-400 text-purple-800 font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors text-lg"
            >
              Start Your Journey 🚀
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-purple-800 transition-colors text-lg"
            >
              Learn More
            </button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-3xl font-bold">10,000+</div>
              <p className="opacity-90">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold">₹41.6Cr+</div>
              <p className="opacity-90">Transactions Processed</p>
            </div>
            <div>
              <div className="text-3xl font-bold">99.9%</div>
              <p className="opacity-90">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;