import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome to FinBuddy</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-xl">📊 Budget Planner</div>
        <div className="bg-green-100 p-4 rounded-xl">🤖 AI Financial Coach</div>
        <div className="bg-yellow-100 p-4 rounded-xl">📚 Regional Learning</div>
      </div>
    </div>
  );
}
