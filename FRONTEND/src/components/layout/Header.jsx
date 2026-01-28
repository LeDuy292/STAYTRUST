import React from 'react';
import Button from '../common/Button';

const Header = () => {
  return (
    <header className="w-full border-b border-gray-800 bg-background-dark/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">verified_user</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">STAYTRUST</h2>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Help Center</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Privacy</a>
          <div className="w-auto">
            <Button variant="ghost" className="!w-auto">Contact Support</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;