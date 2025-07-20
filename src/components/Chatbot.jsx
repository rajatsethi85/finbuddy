import React, { useState } from 'react';

export default function Chatbot() {
  const [msg, setMsg] = useState('');
  const [responses, setResponses] = useState([]);

  const sendMessage = () => {
    setResponses(prev => [...prev, { user: msg, bot: "This is a sample response." }]);
    setMsg('');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">AI Financial Coach</h2>
      <div className="space-y-2">
        {responses.map((r, i) => (
          <div key={i}>
            <p><strong>You:</strong> {r.user}</p>
            <p><strong>Bot:</strong> {r.bot}</p>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input className="border p-2 flex-grow" value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button onClick={sendMessage} className="bg-indigo-600 text-white px-4">Send</button>
      </div>
    </div>
  );
}
