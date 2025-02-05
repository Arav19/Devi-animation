import React from 'react';

const MandalaBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Center Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5">
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="2"/>
          <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="2"/>
          <circle cx="400" cy="400" r="220" stroke="currentColor" strokeWidth="2"/>
          <path d="M400 20v760M20 400h760M168 168l464 464M632 168L168 632" 
                stroke="currentColor" strokeWidth="2"/>
          <path d="M400 100Q550 400 400 700Q250 400 400 100" stroke="currentColor" strokeWidth="2"/>
          <path d="M100 400Q400 250 700 400Q400 550 100 400" stroke="currentColor" strokeWidth="2"/>
          {/* Lotus Petals */}
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M400 400l-100-100a141.4 141.4 0 0 1 200 0z`}
              stroke="currentColor"
              strokeWidth="2"
              transform={`rotate(${i * 45} 400 400)`}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default MandalaBackground;