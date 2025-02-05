import React from 'react';
import { Menu } from 'lucide-react';

interface TopBarProps {
  onMenuClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-purple-950/80 via-indigo-950/80 to-purple-950/80 backdrop-blur-sm border-b border-purple-500/20 z-40">
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <span className="text-transparent bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text font-medium">
          Ask Devi
        </span>
        <button
          onClick={onMenuClick}
          className="p-2 rounded-full bg-purple-900/50 backdrop-blur-sm border border-purple-500/20 hover:bg-purple-900/70 transition-colors"
        >
          <Menu className="w-6 h-6 text-yellow-400" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;