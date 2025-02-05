import React from 'react';

const MandalaOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[url('https://images.unsplash.com/photo-1585155967849-91c736589c84?auto=format&fit=crop&q=80&w=400')] bg-no-repeat bg-contain rotate-180" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[url('https://images.unsplash.com/photo-1585155967849-91c736589c84?auto=format&fit=crop&q=80&w=400')] bg-no-repeat bg-contain" />
    </div>
  );
};

export default MandalaOverlay;