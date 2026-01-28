import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-10 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-xs text-slate-500">© 2024 STAYTRUST AI Technologies. All rights reserved.</p>
          <p className="text-[10px] text-slate-600">Phase 1: User Foundation (Enhanced) - UC-1.0</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {['Security Center', 'Privacy Hub', 'Cookie Settings', 'Accessibility', 'Platform Status'].map((item) => (
            <a key={item} className="text-xs text-slate-500 hover:text-primary transition-colors font-medium" href="#">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;