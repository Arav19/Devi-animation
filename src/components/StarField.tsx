import React from 'react';

const StarField = () => {
  // Create a safe zone around the title text
  const isSafeZone = (x: number, y: number) => {
    const titleZone = {
      top: 30,
      bottom: 45,
      left: 25,
      right: 75
    };
    return !(x > titleZone.left && x < titleZone.right && y > titleZone.top && y < titleZone.bottom);
  };

  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden pointer-events-none z-0">
      {[...Array(300)].map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        if (!isSafeZone(x, y)) return null;
        
        const size = Math.random() * 3 + 1;
        const isLarge = Math.random() > 0.9;
        
        return (
          <div
            key={i}
            className="fixed animate-twinkle"
            style={{
              width: `${isLarge ? size * 2 : size}px`,
              height: `${isLarge ? size * 2 : size}px`,
              top: `${y}vh`,
              left: `${x}%`,
              animationDelay: `${Math.random() * 5}s`,
              background: isLarge 
                ? 'radial-gradient(circle, rgba(255,215,0,1) 0%, rgba(255,223,186,0.8) 50%, rgba(255,255,255,0) 100%)'
                : 'radial-gradient(circle, rgba(255,223,186,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)',
              boxShadow: isLarge 
                ? '0 0 8px rgba(255,215,0,0.8), 0 0 12px rgba(255,215,0,0.4)'
                : '0 0 4px rgba(255,223,186,0.8)',
              borderRadius: '50%',
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        );
      })}
    </div>
  );
};

export default StarField;