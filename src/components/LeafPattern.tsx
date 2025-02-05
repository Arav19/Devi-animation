import React from 'react';

const LeafPattern = () => {
  // Create an array of 5 leaves with progressive sizes
  const leaves = [
    { size: 80, opacity: 0.1 },   // Smallest (top)
    { size: 104, opacity: 0.15 }, // Smaller
    { size: 128, opacity: 0.2 },  // Medium (center)
    { size: 104, opacity: 0.15 }, // Smaller
    { size: 80, opacity: 0.1 },   // Smallest (bottom)
  ];

  const createLeafBackground = (isRight: boolean) => {
    return leaves.map((leaf, index) => (
      <div
        key={index}
        className="absolute w-96"
        style={{
          height: `${leaf.size}px`,
          background: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${isRight ? 'M200 100C200 100 150 50 100 50C50 50 0 100 0 100C0 100 50 150 100 150C150 150 200 100 200 100Z' : 'M0 100C0 100 50 50 100 50C150 50 200 100 200 100C200 100 150 150 100 150C50 150 0 100 0 100Z'}' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='${isRight ? '200' : '0'}' y1='100' x2='${isRight ? '0' : '200'}' y2='100' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFD700' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFD700'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${leaf.size}px ${leaf.size}px`,
          backgroundPosition: `${isRight ? 'right' : 'left'} center`,
          opacity: leaf.opacity,
          [isRight ? 'right' : 'left']: 0,
          top: `calc(50% - ${leaf.size * 2.5}px + ${index * leaf.size}px)`,
        }}
      />
    ));
  };

  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block mt-16">
      {/* Left Pattern */}
      <div className="absolute left-0 h-screen">
        {createLeafBackground(false)}
      </div>
      
      {/* Right Pattern */}
      <div className="absolute right-0 h-screen">
        {createLeafBackground(true)}
      </div>
    </div>
  );
};

export default LeafPattern;