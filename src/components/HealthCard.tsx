import React from 'react';

interface HealthCardProps {
  title: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
}

function HealthCard({ title, value, unit, icon }: HealthCardProps) {
  return (
    <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300 cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-white bg-opacity-20 rounded-lg p-2">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="text-right">
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-blue-200 text-sm">{unit}</div>
      </div>
    </div>
  );
}

export default HealthCard;