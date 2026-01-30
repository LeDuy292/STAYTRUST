import React from 'react';

const FilterBar = () => {
    return (
        <div className="flex items-center gap-3 px-6 py-3 border-b border-[#293837] bg-transparent backdrop-blur-md overflow-x-auto whitespace-nowrap z-40">
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white/5 backdrop-blur-sm px-4 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group">
                <p className="text-slate-700 dark:text-white text-xs font-medium">Price Range</p>
                <span className="material-symbols-outlined text-sm group-hover:text-primary">expand_more</span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white/5 backdrop-blur-sm px-4 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group">
                <p className="text-slate-700 dark:text-white text-xs font-medium">Room Type</p>
                <span className="material-symbols-outlined text-sm group-hover:text-primary">expand_more</span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white/5 backdrop-blur-sm px-4 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group">
                <p className="text-slate-700 dark:text-white text-xs font-medium">Amenities</p>
                <span className="material-symbols-outlined text-sm group-hover:text-primary">expand_more</span>
            </button>
            <div className="h-6 w-[1px] bg-[#293837] mx-2"></div>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary/20 border border-primary/50 px-4 group">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <p className="text-primary text-xs font-medium">Verified Only</p>
                <span className="material-symbols-outlined text-primary text-sm">check</span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white/5 backdrop-blur-sm px-4 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group">
                <span className="material-symbols-outlined text-xs">tune</span>
                <p className="text-slate-700 dark:text-white text-xs font-medium">More Filters</p>
            </button>
        </div>
    );
};

export default FilterBar;
