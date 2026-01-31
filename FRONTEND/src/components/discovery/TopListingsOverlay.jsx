import React from 'react';

const TopListingsOverlay = ({ listings, activeListingId, setActiveListingId }) => {
    // Mock helper for images (would normally come from listing data)
    const getMockImage = (index) => {
        const images = [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1529408686214-c48d841bd6f9?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80"
        ];
        return images[index % images.length];
    };

    return (
        <div className="absolute top-0 right-0 h-full w-full md:w-[450px] pointer-events-none flex flex-col justify-center p-6 bg-gradient-to-l from-[#0f172a] via-[#0f172a]/80 to-transparent">
            {/* Glass Container */}
            <div className="pointer-events-auto bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[85vh] relative">

                {/* Header */}
                <div className="p-6 border-b border-white/10 bg-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4">
                        <span className="material-symbols-outlined text-[80px] text-emerald-500 rotate-12">trophy</span>
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase">Trending Now</span>
                        </div>
                        <h2 className="text-3xl font-black text-white leading-tight">
                            Top 10 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Premium Listings</span>
                        </h2>
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                    {listings.map((listing, index) => (
                        <div
                            key={listing.id}
                            className={`
                                group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer
                                ${activeListingId === listing.id
                                    ? 'bg-emerald-900/20 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] scale-[1.02]'
                                    : 'bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20'
                                }
                            `}
                            onMouseEnter={() => setActiveListingId(listing.id)}
                            onMouseLeave={() => setActiveListingId(null)}
                        >
                            <div className="flex p-3 gap-4">
                                {/* Image Thumbnail */}
                                <div className="relative w-24 h-24 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                                    <img
                                        src={getMockImage(index)}
                                        alt={listing.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Rank Badge overlay */}
                                    <div className={`
                                        absolute top-0 left-0 w-8 h-8 rounded-br-xl flex items-center justify-center font-bold text-sm shadow-lg
                                        ${index === 0 ? 'bg-gradient-to-br from-yellow-300 to-yellow-600 text-black' :
                                            index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-black' :
                                                index === 2 ? 'bg-gradient-to-br from-orange-300 to-orange-600 text-black' :
                                                    'bg-slate-800/90 text-slate-400 backdrop-blur-md'}
                                    `}>
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className={`text-base font-bold truncate transition-colors ${activeListingId === listing.id ? 'text-emerald-400' : 'text-white group-hover:text-emerald-300'}`}>
                                                {listing.title}
                                            </h3>
                                            <div className="flex items-center gap-1 bg-black/30 px-1.5 py-0.5 rounded-md">
                                                <span className="material-symbols-outlined text-[12px] text-yellow-500 filled">star</span>
                                                <span className="text-xs font-bold text-yellow-500">{listing.rating}</span>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-xs truncate flex items-center gap-1 mt-1">
                                            <span className="material-symbols-outlined text-[14px]">location_on</span>
                                            {listing.location}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-end mt-2">
                                        <div>
                                            <p className="text-emerald-400 font-black text-lg">{listing.price}</p>
                                            <p className="text-slate-500 text-[10px] uppercase font-bold">Per Month</p>
                                        </div>

                                        <span className={`
                                            w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                                            ${activeListingId === listing.id ? 'bg-emerald-500 text-white rotate-[-45deg]' : 'bg-white/10 text-white group-hover:bg-white/20'}
                                        `}>
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopListingsOverlay;
