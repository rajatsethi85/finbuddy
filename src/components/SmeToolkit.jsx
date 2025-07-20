import React from 'react';

const mockFunding = [
  { id: 1, name: "MSME Loan Scheme", amount: "Up to ₹10L", status: "Open" },
  { id: 2, name: "Startup India Credit", amount: "Up to ₹5L", status: "Closed" },
];

export default function SmeToolkit() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">SME Financial Tools</h2>
      <div className="space-y-4">
        {mockFunding.map(f => (
          <div key={f.id} className="p-4 bg-gray-100 rounded-xl">
            <p className="font-semibold">{f.name}</p>
            <p>Amount: {f.amount}</p>
            <p>Status: {f.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
