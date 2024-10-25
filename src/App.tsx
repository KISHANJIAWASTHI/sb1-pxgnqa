import React, { useState } from 'react';
import { Heart, Droplet, Timer, Footprints, Activity, Thermometer } from 'lucide-react';
import HealthCard from './components/HealthCard';
import Header from './components/Header';

function App() {
  const [metrics] = useState({
    bloodPressure: '120/80',
    heartRate: '72',
    oxygenRate: '98',
    sleepHours: '7.5',
    steps: '8,547',
    sugarLevel: '95'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HealthCard
            title="Blood Pressure"
            value={metrics.bloodPressure}
            unit="mmHg"
            icon={<Activity className="w-8 h-8 text-blue-400" />}
          />
          <HealthCard
            title="Heart Rate"
            value={metrics.heartRate}
            unit="bpm"
            icon={<Heart className="w-8 h-8 text-red-400" />}
          />
          <HealthCard
            title="Oxygen Rate"
            value={metrics.oxygenRate}
            unit="%"
            icon={<Droplet className="w-8 h-8 text-cyan-400" />}
          />
          <HealthCard
            title="Sleep Schedule"
            value={metrics.sleepHours}
            unit="hours"
            icon={<Timer className="w-8 h-8 text-purple-400" />}
          />
          <HealthCard
            title="Steps"
            value={metrics.steps}
            unit="steps"
            icon={<Footprints className="w-8 h-8 text-green-400" />}
          />
          <HealthCard
            title="Sugar Level"
            value={metrics.sugarLevel}
            unit="mg/dL"
            icon={<Thermometer className="w-8 h-8 text-orange-400" />}
          />
        </div>
      </main>
    </div>
  );
}

export default App;