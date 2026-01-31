import React from 'react';

const SearchFooter = () => {
    return (
        <footer className="z-50 bg-[#102220]/95 backdrop-blur border-t border-[#13ecda]/20 px-6 py-2 flex justify-between items-center text-[10px] tracking-widest text-[#92c9c5] uppercase">
            <div className="flex gap-6">
                <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#13ecda] rounded-full animate-pulse"></span>
                    124 Rooms available in Da Nang
                </span>
                <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#13ecda] rounded-full"></span>
                    42 AI Verified Today
                </span>
            </div>
            <div className="flex gap-4">
                <span>Exchange Rate: 1 USD = 25,000 VND</span>
                <a className="hover:text-[#13ecda] transition-colors" href="#">Privacy & Terms</a>
            </div>
        </footer>
    );
};

export default SearchFooter;
