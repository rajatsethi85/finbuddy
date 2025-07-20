import React from 'react';

const mockLearning = [
  { id: 1, title: "Budgeting Basics in Hindi", lang: "Hindi", type: "Video" },
  { id: 2, title: "Intro to Microloans", lang: "Tamil", type: "Article" },
];

export default function LearningHub() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Localized Learning</h2>
      <div className="grid gap-4">
        {mockLearning.map(item => (
          <div key={item.id} className="p-4 bg-white shadow rounded-xl">
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-600">{item.lang} | {item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
