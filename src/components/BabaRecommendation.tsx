import React from 'react';

const BabaRecommendation = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="rounded-xl bg-gradient-to-r from-[#FFD700]/10 via-[#FDB931]/20 to-[#FFD700]/10 border border-yellow-500/30 backdrop-blur-sm">
        <div className="px-3 py-2 sm:px-4 sm:py-3">
          <div className="relative">
            {/* Main Content */}
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              {/* Title */}
              <p className="text-xs sm:text-sm font-medium bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent text-center">
                Baba Maharishi recommends Ask Devi
              </p>

              {/* Profile and Quote */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Left Decorative Element */}
                <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent" />

                {/* Image Container */}
                <div className="relative">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/40 via-yellow-500/50 to-yellow-400/40 rounded-full blur-md" />
                  
                  {/* Image Frame */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400">
                    <img
                      src="/images/baba.png"
                      alt="Baba Maharishi"
                      className="w-full h-full rounded-full object-cover ring-1 ring-yellow-400/70"
                    />
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[10px] sm:text-xs text-yellow-100/80 italic">
                  "Devi is the devi of Vedic astrology- Personalised, Accurate and 24/7 available"
                </p>

                {/* Right Decorative Element */}
                <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabaRecommendation;