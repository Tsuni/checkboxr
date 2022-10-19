import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dashboard } from './features/dashboard/Dashboard';

function App() {
  return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full m-4">
        <div className="mx-auto max-w-3xl h-full">
          <Dashboard />
        </div>
      </div>
    
  );
}

export default App;
