import React, { useState } from 'react';

const Transaction = () => {
 const user = { userType: 'customer' }; // change to 'retailer' to test other view
  const isCustomerView = user.userType === 'customer';

  return (
    <div>

      {isCustomerView ? (
        <div id="customerTransactions" className="section">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🛍️ My Purchases & Payments</h2>
            <p className="text-xl text-gray-600">Track your buy now, pay later transactions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Available Credit', value: '₹2,08,500', icon: '💳', gradient: 'from-green-500 to-green-600' },
              { label: 'Pending Payments', value: '₹37,500', icon: '⏰', gradient: 'from-orange-500 to-orange-600' },
              { label: 'Next Payment', value: '₹12,500 - Dec 15', icon: '📅', gradient: 'from-blue-500 to-blue-600', small: true }
            ].map((item, i) => (
              <div key={i} className={`card-hover bg-gradient-to-r ${item.gradient} rounded-xl p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.label}</h3>
                    <p className={`font-bold ${item.small ? 'text-xl' : 'text-3xl'}`}>{item.value}</p>
                  </div>
                  <span className="text-4xl">{item.icon}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Transactions</h3>
            {[{
              name: 'Fashion Store', date: 'Dec 1, 2024', amount: '₹24,900', status: '2/4 payments', color: 'orange'
            }, {
              name: 'Tech Gadgets', date: 'Nov 28, 2024', amount: '₹49,900', status: 'Paid', color: 'green'
            }, {
              name: 'Home Decor', date: 'Nov 25, 2024', amount: '₹12,500', status: '1/3 payments', color: 'blue'
            }].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-2">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-xl">{item.name === 'Home Decor' ? '🏠' : item.name === 'Fashion Store' ? '👕' : '📱'}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{item.amount}</p>
                  <span className={`bg-${item.color}-100 text-${item.color}-800 px-2 py-1 rounded-full text-xs`}>{item.status}</span>
                </div>
              </div>
            ))}
            <button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">View All Transactions</button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Payments</h3>
            {[{
              title: 'Fashion Store Payment', due: 'December 15, 2024', amount: '₹12,500', color: 'red', button: 'Pay Now'
            }, {
              title: 'Home Decor Payment', due: 'December 25, 2024', amount: '₹6,250', color: 'yellow', button: 'Schedule'
            }].map((item, i) => (
              <div key={i} className={`flex items-center justify-between p-4 border-l-4 border-${item.color}-500 bg-${item.color}-50 mb-2`}>
                <div>
                  <h4 className={`font-semibold text-${item.color}-800`}>{item.title}</h4>
                  <p className={`text-${item.color}-600`}>Due: {item.due}</p>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-xl text-${item.color}-800`}>{item.amount}</p>
                  <button className={`bg-${item.color}-500 text-white px-4 py-2 rounded-lg hover:bg-${item.color}-600 transition-colors text-sm`}>{item.button}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div id="retailerTransactions" className="section">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🏪 Business Transactions</h2>
            <p className="text-xl text-gray-600">Manage your sales and customer payments</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Today's Sales", value: '₹2,70,850', change: '+12% from yesterday', color: 'green' },
              { label: 'Pending Payments', value: '₹7,03,750', change: 'From 23 customers', color: 'blue' },
              { label: 'Monthly Revenue', value: '₹37,66,600', change: '+8% from last month', color: 'purple' },
              { label: 'Active Customers', value: '156', change: '+5 new this week', color: 'orange' }
            ].map((item, i) => (
              <div key={i} className={`card-hover bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-xl p-6 text-white`}>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{item.label}</h3>
                  <p className="text-3xl font-bold">{item.value}</p>
                  <p className="text-sm opacity-90">{item.change}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Sales</h3>
            {[{
              name: 'Sarah Johnson', date: 'Dec 5, 2024 - 2:30 PM', amount: '₹24,900', status: 'Pay Later', color: 'green'
            }, {
              name: 'Mike Chen', date: 'Dec 5, 2024 - 1:15 PM', amount: '₹12,500', status: 'Paid', color: 'blue'
            }, {
              name: 'Emma Davis', date: 'Dec 5, 2024 - 11:45 AM', amount: '₹35,400', status: 'Installments', color: 'orange'
            }].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-2">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{item.amount}</p>
                  <span className={`bg-${item.color}-100 text-${item.color}-800 px-2 py-1 rounded-full text-xs`}>{item.status}</span>
                </div>
              </div>
            ))}
            <button className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold">View All Sales</button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">💰 Business Funding</h3>
              <p className="mb-6">Get instant funding to grow your business</p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Available Funding:</span>
                  <span className="font-bold">₹41,66,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Interest Rate:</span>
                  <span className="font-bold">2.5% monthly</span>
                </div>
                <div className="flex justify-between">
                  <span>Approval Time:</span>
                  <span className="font-bold">24 hours</span>
                </div>
              </div>
              <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Apply for Funding
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🏢 SME Tools</h3>
              {[
                { icon: '📊', title: 'Business Analytics', desc: 'Track performance metrics' },
                { icon: '💳', title: 'Payment Processing', desc: 'Manage payment methods' },
                { icon: '📈', title: 'Growth Insights', desc: 'Business growth recommendations' },
                { icon: '🎯', title: 'Marketing Tools', desc: 'Promote your business' }
              ].map((tool, i) => (
                <button key={i} className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors mb-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">{tool.icon}</span>
                    <div>
                      <h4 className="font-semibold">{tool.title}</h4>
                      <p className="text-gray-600 text-sm">{tool.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transaction;
