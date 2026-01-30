import React from 'react';

const FilterSidebar = () => {
    return (
        <aside className="w-80 h-full flex flex-col z-40 bg-[#102220]/80 backdrop-blur-xl border-r border-[#13ecda]/10">
            <div className="p-6 flex flex-col gap-8 overflow-y-auto no-scrollbar">
                <div>
                    <h2 className="text-lg font-bold mb-1 text-white">Advanced Filters</h2>
                    <p className="text-[#92c9c5] text-xs">Tailoring your AI search results</p>
                </div>

                {/* AI Verified Toggle */}
                <div className="p-4 rounded-xl bg-[#13ecda]/10 border border-[#13ecda]/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#13ecda]">verified_user</span>
                        <div>
                            <p className="text-sm font-bold text-white">AI-Verified</p>
                            <p className="text-[10px] text-[#92c9c5]">Verified 2 days ago</p>
                        </div>
                    </div>
                    <div className="w-10 h-5 bg-[#13ecda] rounded-full relative cursor-pointer">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                </div>

                {/* Price Range */}
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-white">
                        <label className="text-sm font-medium">Price Range</label>
                        <span className="text-xs text-[#13ecda]">$400 - $1,200</span>
                    </div>
                    <div className="h-1 w-full bg-[#234845] rounded-full relative">
                        <div className="absolute left-1/4 right-1/4 h-full bg-[#13ecda] rounded-full"></div>
                        <div className="absolute left-1/4 -top-1.5 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-[#13ecda] cursor-pointer"></div>
                        <div className="absolute right-1/4 -top-1.5 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-[#13ecda] cursor-pointer"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-[#92c9c5] mt-1">
                        <span>10M VND</span>
                        <span>30M VND</span>
                    </div>
                </div>

                {/* Room Type */}
                <div className="flex flex-col gap-3">
                    <label className="text-sm font-medium text-white">Room Type</label>
                    <div className="grid grid-cols-2 gap-2">
                        <button className="px-3 py-2 bg-[#13ecda] text-[#102220] text-xs font-bold rounded-lg hover:opacity-90">Studio</button>
                        <button className="px-3 py-2 bg-[#234845] text-white text-xs font-bold rounded-lg hover:bg-[#2c5854]">1 Bedroom</button>
                        <button className="px-3 py-2 bg-[#234845] text-white text-xs font-bold rounded-lg hover:bg-[#2c5854]">2 Bedrooms</button>
                        <button className="px-3 py-2 bg-[#234845] text-white text-xs font-bold rounded-lg hover:bg-[#2c5854]">Villa</button>
                    </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-col gap-3">
                    <label className="text-sm font-medium text-white">Top Amenities</label>
                    <div className="space-y-2">
                        {[
                            { icon: 'wifi', label: 'High-speed WiFi' },
                            { icon: 'pool', label: 'Infinity Pool' },
                            { icon: 'fitness_center', label: 'Gym Access' },
                            { icon: 'pet_supplies', label: 'Pet-friendly' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#234845] cursor-pointer group transition-colors">
                                <span className="material-symbols-outlined text-sm text-[#92c9c5] group-hover:text-[#13ecda]">{item.icon}</span>
                                <span className="text-xs text-[#92c9c5] group-hover:text-white">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer / Reset */}
            <div className="p-6 border-t border-[#13ecda]/20 mt-auto">
                <button className="w-full py-3 bg-[#13ecda] text-[#102220] font-bold rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-[#10d4c4] transition-colors">
                    <span className="material-symbols-outlined text-sm">filter_alt_off</span>
                    Reset Filters
                </button>
            </div>
        </aside>
    );
};

export default FilterSidebar;
