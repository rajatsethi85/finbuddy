import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="container flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-300">
          FinBuddy
        </h1>
        <div className="space-x-6 flex items-center">
          <Link
            to="/"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/chatbot"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            AI Coach
          </Link>
          <Link
            to="/learn"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Learn
          </Link>
          <Link
            to="/sme"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            SME Toolkit
          </Link>
          <Link
            to="/children"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Children
          </Link>
          <Link
            to="/women"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Women
          </Link>
          <Link
            to="/financial-learning"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Financial Learning
          </Link>
        </div>
      </div>
    </nav>
  );
}