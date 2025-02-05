import React from 'react';
import { Flower } from 'lucide-react';

const FlowerDivider = () => {
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="absolute left-0 w-1/3 h-px bg-gradient-to-r from-transparent to-yellow-400/30" />
      <div className="absolute right-0 w-1/3 h-px bg-gradient-to-l from-transparent to-yellow-400/30" />
      <div className="relative flex justify-center">
        <div className="animate-spin-slow">
          <Flower className="w-12 h-12 text-yellow-400/70" />
        </div>
      </div>
    </div>
  );
};

export default FlowerDivider;