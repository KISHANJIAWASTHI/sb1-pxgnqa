import React from 'react';
import { Activity } from 'lucide-react';

function Header() {
  return (
    <header className="bg-opacity-30 bg-black backdrop-blur-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <Activity className="w-10 h-10 text-blue-400 mr-3" />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">MediAging</h1>
            <p className="text-blue-200 text-lg">DAILY HEALTH COMPANION</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;